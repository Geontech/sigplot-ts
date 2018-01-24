import * as sigplot from 'sigplot';

import { Boxes2Options } from './boxes2-options';
import { SideFeature } from './side-feature';
import { Box } from './box';

/**
 * This is an alternate Boxes plugin that allows control over
 * which sides of the box to draw.
 * 
 * This class mirrors closely the version found in SigPlot.
 * However more methods have been added for supporting
 * updating, etc. as well as drawing partial boxes.
 */
export class Boxes2Plugin {
    /** Minimum X position */
    get minX(): number { return this._minX; }

    /** Maximum X position */
    get maxX(): number { return this._maxX; }

    /** Minimum Y position */
    get minY(): number { return this._minY; }

    /** Maximum Y Position */
    get maxY(): number { return this._maxY; }

    /** Map of the boxes to draw */
    private boxes = new Map<string, Box>();

    /** The plot to draw within */
    private plot: sigplot.Plot;

    /** Minimum X position */
    private _minX: number;

    /** Maximum X position */
    private _maxX: number;

    /** Minimum Y position */
    private _minY: number;

    /** Maximum Y Position */
    private _maxY: number;

    constructor(public options: Boxes2Options = {}) {
        if (this.options.display === undefined) {
            this.options.display = true;
        }
        this.resetStats();
    }

    /**
     * Initialize the plugin for the plot
     * @param plot
     */
    init(plot: sigplot.Plot): void {
        this.plot = plot;
    }

    /**
     * Menu callback
     */
    menu(): any {
        return {
            text: 'Boxes2...',
            menu: {
                title: 'BOXES_2',
                items: [{
                    text: 'Display',
                    checked: this.options.display,
                    style: 'checkbox',
                    handler: () => {
                        this.options.display = !this.options.display;
                        this.plot.redraw();
                    }
                }, {
                    text: 'Clear All',
                    handler: () => { this.clear_boxes(); }
                }]
            }
        };
    }

    /**
     * Add a box to the view
     * @param id The unique ID for the box
     * @param box The box parameters to draw
     * @param redraw Whether or not to redraw with this call
     */
    add_box(id: string, box: Box, redraw = true): void {
        this.boxes.set(id, box);
        if (redraw) {
            this.plot.redraw();
        }
    }

    /**
     * Update a box in the view
     * @param id The unique ID for the box
     * @param box The box parameters to draw
     * @param redraw Whether or not to redraw with this call
     */
    update_box(id: string, box: Box, redraw = true): void {
        // TODO: Change this to a merge?
        this.add_box(id, box, redraw);
    }

    /**
     * Remove a box from the view
     * @param id The unique ID for the box
     * @param redraw Whether or not to redraw with this call
     */
    remove_box(id: string, redraw = true): void {
        this.boxes.delete(id);
        if (redraw) {
            this.plot.redraw();
        }
    }

    /**
     * Clears all boxes
     * @param redraw Whether or not to redraw with this call
     */
    clear_boxes(redraw = true): void {
        this.boxes.clear();
        if (redraw) {
            this.plot.redraw();
        }
    }

    /**
     * Refresh all the drawn blocks
     * @param canvas
     */
    refresh(canvas: HTMLCanvasElement): void {
        if (!this.options.display) {
            return;
        }

        const Gx = (this.plot as any)._Gx;
        const Mx = (this.plot as any)._Mx;

        // Get context, and ensure we don't draw outside
        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.beginPath();
        ctx.rect(Mx.l, Mx.t, Mx.r - Mx.l, Mx.b - Mx.t);
        ctx.clip();

        let x: number;
        let y: number;
        let height: number;
        let width : number;
        this.resetStats();
        this.boxes.forEach((box: Box, id: string) => {
            // Update statistics
            this._minX = Math.min(this._minX, box.x);
            this._maxX = Math.max(this._maxX, box.x + box.width);
            this._minY = Math.min(this._minY, box.y - box.height);
            this._maxY = Math.max(this._maxY, box.y);

            // Calculate drawing position
            if (box.absolutePlacement) {
                x = box.x + Mx.l;
                y = box.y + Mx.t;
                width = box.width;
                height = box.height;
            } else {
                const ul = sigplot.mx.real_to_pixel(Mx, box.x, box.y);
                const lr = sigplot.mx.real_to_pixel(Mx, box.x + box.width, box.y + box.height);
                x = ul.x;
                y = ul.y;
                width = lr.x - ul.x;
                height = ul.y - lr.y;
            }

            // If fillStyle is set, create the rectangle first.
            if (box.fill) {
                const alpha = ctx.globalAlpha;
                const fill = ctx.fillStyle;
                ctx.beginPath();
                ctx.globalAlpha = box.fill.alpha || alpha;
                ctx.fillStyle = box.fill.style || fill;
                ctx.fillRect(x, y, width, height);
                // Restore alpha, fill
                ctx.globalAlpha = alpha;
                ctx.fillStyle = fill;
            }

            // Helper function for drawing a generic line
            let drawSide = (x1: number, y1: number, x2: number, y2: number, feature: SideFeature = {}) => {
                ctx.beginPath();
                ctx.lineCap = feature.lineCap || 'butt';
                ctx.strokeStyle = feature.strokeStyle || '#000000';
                ctx.lineWidth = feature.lineWidth || 1;
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            };

            // Draw each side: left, top, right, bottom
            if (box.leftSide) {
                drawSide(x, y, x, y - height, box.leftSide);
            }
            if (box.topSide) {
                drawSide(x, y - height, x + width, y - height, box.topSide);
            }
            if (box.rightSide) {
                drawSide(x + width, y, x + width, y - height, box.rightSide);
            }
            if (box.bottomSide) {
                drawSide(x, y, x + width, y, box.bottomSide);
            }

            // If text is defined, add the annotation
            if (box.text) {
                ctx.beginPath();
                ctx.font = box.text.font || Mx.text_H + 'px Courier New, monospace';
                ctx.globalAlpha = 1;
                ctx.textAlign = 'end';
                ctx.fillStyle = ctx.strokeStyle;

                x -= Mx.text_w;
                y -= (Mx.text_h / 3);
                const textWidth = ctx.measureText(box.text.value).width;
                if (x - textWidth < Mx.l) {
                    x += width;
                }

                ctx.fillText(box.text.value, x, y);
            }
        });

        // Restore
        ctx.restore();
    }

    dispose(): void {
        this.plot = undefined;
        this.boxes.clear();
    }

    private resetStats(): void {
        this._minX = Infinity;
        this._maxX = -Infinity;
        this._minY = Infinity;
        this._maxY = -Infinity;
    }
}

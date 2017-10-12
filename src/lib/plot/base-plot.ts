/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * (Abstract) Base Plot class to encourage a unified API going forward.
 */

import * as sigplot from 'sigplot';

import { FormatSize, FormatType } from '../bluefile';
import { ILayer } from '../layer';
import { Units } from '../m';

import { IConstructorOptions, ISettingsOptions } from './sigplot';
import { ConstructorOptions } from './constructor-options';
import { SettingsOptions } from './settings-options';

/**
 * BasePlot is an abstract base class for sigplot.Plot to help unify some of the
 * API for downstream classes.
 *
 */
export abstract class BasePlot {
    // Reference to the sigplot.Plot instance
    _plot: sigplot.Plot;

    /**
     * The settings related to the current plot. For use with checkSettings.
     */
    get settings(): SettingsOptions {
        return this._options;
    }

    /**
     * If your ConstructorOptions use the default xlabel and ylabel, changing
     * these values will update the X and Y labels by getting the string name
     * of the enumeration (Units).
     */
    set xlab(units: Units) { this._options.xlab = units; }
    set ylab(units: Units) { this._options.ylab = units; }

    /** The options used when creating the plot */
    private _options: ConstructorOptions;

    /**
     * @param el - The DOM element to draw within (div, etc.)
     * @param options - The ConstructorOptions for this plot.
     */
    constructor (
        el: any,
        options: ConstructorOptions = new ConstructorOptions()
    ) {
        this._plot = new sigplot.Plot(el, options.toInterface());
        this._options = options;
    }

    /**
     * If you resize the DOM element for the plot, call this to cause the plot
     * to redraw
     */
    checkResize() { this._plot.checkresize(); }

    /**
     * Push any changes in the settings to the underlying plot instance.
     */
    checkSettings() { this._plot.change_settings(this.settings.toInterface()); }

    /**
     * Update the plot with the data buffer
     */
    abstract push (
        buffer:  any[],
        size?:   FormatSize,
        type?:   FormatType,
        ...args: any[]);

    /** Get the plot layer for the data */
    abstract getLayer(...args: any[]): ILayer;

    /** Remove a/the plot layer */
    abstract removeLayer(...args: any[]): void;
}

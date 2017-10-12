/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Generic raster plot
 */

import { Layer2D } from './layer2d';
import { BasePlot, ConstructorOptions } from './plot';
import {
    AxisData,
    BlueHeaderOptions,
    FormatSize,
    FormatType
} from './bluefile';

const DEFAULT_SIGNAL = 'signal';

/**
 * RasterPlot provides a basic 2D "falling raster" (a.k.a., waterfall) plot of
 * one's data.
 * @preferred
 */
export class RasterPlot extends BasePlot {

    /** Layer number being drawn */
    private _layerN: number;

    /** Get the SigPlot layer */
    getLayer(): Layer2D {
        return <Layer2D> this._plot.get_layer(this._layerN);
    }

    /** Remove the SigPlot layer */
    removeLayer(): void {
        if (this._plot.get_layer(this._layerN) !== undefined) {
            this._plot.remove_layer(this._layerN);
        }
    }

    /**
     * Push data to the plot
     * @param buffer - Data to Plot
     * @param size - Size/Shape of the data (complex, real, etc.)
     * @param type - Data Type of the buffer (int8, etc.)
     * @param xAxis - Description of the X-axis for the plot
     * @param yAxis - Description of the Y-axis for the plot
     * @param dataId - ID uniquely representing the data.
     */
    push(
        buffer: any[],
        size:    FormatSize = FormatSize.Scalar,
        type:    FormatType = FormatType.Float32,
        xAxis:   AxisData = {},
        yAxis:   AxisData = {},
        dataId:  string = DEFAULT_SIGNAL
        ) {
        const options = BlueHeaderOptions.type2000(size, type, xAxis, yAxis, buffer.length);

        if (!this.getLayer()) {
            this._layerN = this._plot.overlay_pipe(options);
        }

        // For type 2000 plots, the signal name is the file_name in the 
        // resulting bluefile descriptor, which we don't have (we have the 
        // options that make it).  So we create the layer, fetch it, and change 
        // it's 'name', which is the internal name that will appear on the 
        // legend.
        const layer = this.getLayer();
        layer.name = dataId;

        // Adjust the plot for the data length and push to the plot
        // TODO: sync and/or rsync?
        this._plot.push(this._layerN, buffer, options);
    }
}

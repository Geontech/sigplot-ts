/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Generic raster plot
 */

import { Layer2D } from '../../layer2d/index';
import { BasePlot, ConstructorOptions } from '../../plot/index';
import {
    AxisData,
    BlueHeaderOptions,
    FormatSize,
    FormatType
} from '../../bluefile/index';

import { RasterPlotData } from './raster-plot-data';

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
        if (this._plot.get_layer(this._layerN) !== null) {
            this._plot.remove_layer(this._layerN);
        }
    }

    /**
     * Push the data buffer and other information to the plot.
     * @param plotData - buffer and parameters to plot
     */
    push(plotData: RasterPlotData) {
        if (plotData.dataId === undefined) {
            plotData.dataId = DEFAULT_SIGNAL;
        }
        const options = BlueHeaderOptions.type2000(
            plotData.dataSize,
            plotData.dataType,
            plotData.xAxis,
            plotData.yAxis,
            plotData.buffer.length,
            plotData.timeCode
        );

        if (!this.getLayer()) {
            this._layerN = this._plot.overlay_pipe(options);
        }

        // For type 2000 plots, the signal name is the file_name in the 
        // resulting bluefile descriptor, which we don't have (we have the 
        // options that make it).  So we create the layer, fetch it, and change 
        // it's 'name', which is the internal name that will appear on the 
        // legend.
        const layer = this.getLayer();
        layer.name = plotData.dataId;

        // Adjust the plot for the data length and push to the plot
        // TODO: sync and/or rsync?
        this._plot.push(this._layerN, plotData.buffer, options);
    }
}

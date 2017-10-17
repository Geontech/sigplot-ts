/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 */
import { ILayerSettings } from '../../layer/index';
import { PlotData } from '../../plot/index';

/**
 * LinePlotData interface extends the base PlotData interface
 * with control of the line color and layer opacity
 * @interface
 */
export interface LinePlotData extends PlotData {
    /**
     * Extra Layer Settings.  Note, this can have unfortunate consequences.
     * Things like 'color' and 'opacity' work fine, however there is the 
     * potential for SigPlot's Layer1D to react adversely to changing some
     * settings at runtime.
     */
    layerSettings?: ILayerSettings;
}

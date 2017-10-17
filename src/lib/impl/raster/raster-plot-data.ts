/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 */
import { AxisData } from '../../bluefile/index';
import { PlotData } from '../../plot/index';

/**
 * RasterPlotData interface extends the base PlotData interface
 * with Y-axis control data.
 * @interface
 */
export interface RasterPlotData extends PlotData {
    /** Y-Axis data description */
    yAxis?: AxisData;
}

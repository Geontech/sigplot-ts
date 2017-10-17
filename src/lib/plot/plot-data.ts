/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 */

import { FormatType, FormatSize, AxisData } from '../bluefile/index';

/**
 * PlotData interface to simplify and unify implementation plot design
 * @preferred
 */
export interface PlotData {
    /** Data ID related to this buffer */
    dataId?:    string;
    /** The data buffer */
    buffer:     number[];
    /** X-Axis data description */
    xAxis?:     AxisData;
    /** Data Format Size */
    dataSize:   FormatSize;
    /** Data Format Type */
    dataType:   FormatType;
}

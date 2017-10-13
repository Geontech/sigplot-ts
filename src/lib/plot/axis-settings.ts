/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Axis Settings
 */
import { AutoScale } from './enums/index';

/**
 * Interface to collect settings related to an axis of the plot.
 * @preferred
 */
export interface AxisSettings {
    /** Invert the axis */
    inv?: boolean;
    /** Maximum value to plot */
    max?: number;
    /** Minimum value to plot */
    min?: number;
    /** Auto-scaling mode */
    autoScale?: AutoScale;
}

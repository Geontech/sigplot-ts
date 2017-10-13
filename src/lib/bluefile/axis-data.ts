/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 */
import { Units } from '../m/index';

/**
 * Interface for collecting axis data together to reduce the number of
 * parameters in the BlueHeaderOptions methods.
 * @preferred
 */
export interface AxisData {
    start?: number;
    delta?: number;
    units?: Units;
}

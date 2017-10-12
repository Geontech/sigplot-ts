/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Note: BlueHeader Format (Size and Type) String representation
 */
import { FormatSize } from './format-size.enum';
import { FormatType } from './format-type.enum';

/**
 * Returns the stringified diagraph of the data format size and type as 
 * described by Midas BlueFile Format.  This implementation is deliberately 
 * incomplete at this time with respect to data types given support in JS.
 *
 * @param size - Enumeration of the data size (shape)
 * @param type - Enumeration of the data type (the size of the data item)
 * @return The stringified diagraph, like 'SF' for scalar float 32.
 * @preferred
 */
export function format(size: FormatSize, type: FormatType) {
    let s = '';

    switch (size) {
        case FormatSize.Scalar:
            s += 'S';
            break;
        case FormatSize.Complex:
            s += 'C';
            break;
        case FormatSize.Vector:
            s += 'V';
            break;
        case FormatSize.Quad:
            s += 'Q';
            break;
        case FormatSize.Matrix:
            s += 'M';
            break;
        case FormatSize.Transform:
            s += 'T';
            break;
        default:
            break;
    }

    switch (type) {
        case FormatType.Int8:
            s += 'B';
            break;
        case FormatType.Int16:
            s += 'I';
            break;
        case FormatType.Int32:
            s += 'L';
            break;
        case FormatType.Int64:
            s += 'X';
            break;
        case FormatType.Float32:
            s += 'F';
            break;
        case FormatType.Float64:
            s += 'D';
            break;
        default:
            break;
    }

    return s;
}

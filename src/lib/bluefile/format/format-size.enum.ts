/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 */

/**
 * BlueHeader Format Size enumeration
 * @preferred
 */
export enum FormatSize {
    /** 1 element per data point */
    Scalar,
    /** 2 elements per data point (I/Q) */
    Complex,
    /** 3 elements per data point (x,y,z or alt,lat,lon) */
    Vector,
    /** 4 elements per data point (position, time) */
    Quad,
    /** 9 elements per data point (3x3 coordinate transform) */
    Matrix,
    /** 16 elements per data point (4x4 coordinate transform) */
    Transform
}

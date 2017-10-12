/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 */

/**
 * Plot rendering mode, see SigPlot for more information.
 * @preferred
 */
export enum CMode {
    /** Index */
    IN = 0,
    /** Abscissa */
    AB = 1,
    /** Magnitude */
    MA = 2,
    /** Phase */
    PH = 3,
    /** Real */
    RE = 4,
    /** Imaginary */
    IM = 5,
    /** 10*Log10 */
    L0 = 6,
    /** 10*Log10 */
    D1 = 6,
    /** 20*Log10 */
    L2 = 7,
    /** 20*Log10 */
    D2 = 7,
    /** Real vs. Imaginary */
    RI = 8,
    /** Imaginary vs. Real */
    IR = 9
}

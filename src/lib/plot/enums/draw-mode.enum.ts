/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 */

/**
 * Drawing Mode enumeration, see SigPlot for more information.
 *
 * Note: this is a guess based on:
 *       sigplot.layer1d.js change_settings
 *       sigplot.layer2d.js change_settings
 *       "disabled" -> treat it as an undefined value
 * @preferred
 */
export enum DrawMode {
    disabled    = undefined,
    rising      = 1,
    falling     = 2,
    scrolling   = 3,
    lefttoright = 4,
    righttoleft = 5
}

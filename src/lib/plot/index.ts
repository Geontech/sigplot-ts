/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Note: Utility classes and enumerations for making TS development a bit
 *       cleaner since the current exposed sigplot interface is a mix of string
 *       and numeric enumerations at this time.
 */

// Helper classes
export { ConstructorOptions } from './constructor-options';
export { SettingsOptions } from './settings-options';
export { AxisSettings } from './axis-settings';

// Basic plot and data
export { BasePlot } from './base-plot';
export { PlotData } from './plot-data';

// From sigplot
export {
    IConstructorOptions,
    IGridStyle,
    IPlotColors,
    ISettingsOptions
} from './sigplot';

// All the enumerations
export {
    AutoScale,
    CMode,
    DrawMode,
    LineType,
    Origin,
    PHUnits,
    RubberboxAction,
    RubberboxMode,
    XCNT
} from './enums/index';

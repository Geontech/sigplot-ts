/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Re-exports from sigplot module for downstream interfaces
 */

import * as sigplot from 'sigplot';
/* tslint:disable */
export interface ISettingsOptions extends sigplot.ISettingsOptions {}
export interface IConstructorOptions extends sigplot.IConstructorOptions {}
export interface IGridStyle extends sigplot.IGridStyle {}
export interface IPlotColors extends sigplot.IPlotColors {}

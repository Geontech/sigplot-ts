/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Re-exports from sigplot.layer* for downstream interfaces
 */

import * as sigplot from 'sigplot';
/* tslint:disable */
export interface ILayerSettings extends sigplot.layer.ILayerSettings {}
export interface ILayer extends sigplot.layer.ILayer {}

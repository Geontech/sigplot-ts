/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * AnnotationPlugin and interfaces
 */

import * as sigplot from 'sigplot';
/* tslint:disable */
export class     AnnotationPlugin   extends sigplot.plugins.AnnotationPlugin {}
export interface IAnnotationOptions extends sigplot.plugins.IAnnotationOptions {}
export interface IAnnotation        extends sigplot.plugins.IAnnotation {}
export type      Annotations        =       sigplot.plugins.Annotations;
export type      AnnotationValue    =       sigplot.plugins.AnnotationValue;

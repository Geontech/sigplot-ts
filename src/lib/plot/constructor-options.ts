/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Purpose: Constructor Options helper Class
 */
import {
  IConstructorOptions,
  IGridStyle,
  IPlotColors
} from './sigplot';
import { SettingsOptions } from './settings-options';

import {
  AutoScale,
  CMode,
  LineType,
  Origin,
  PHUnits,
  RubberboxAction,
  RubberboxMode,
  XCNT
} from './enums';

import { Units } from '../m';

/**
 * A helper class that implements enumerated interfaces where possible, etc.
 * which makes it not compatible with the IConstructorOptions interface.
 * Use the interface() method to get that interface.
 * @preferred
 */
export class ConstructorOptions extends SettingsOptions {

  no_legend_button: boolean;
  nodragdrop: boolean;

  scroll_time_interval: number;

  x_scrollbar_location: any;

  xlab:   Units;
  xlabel: string | ((...args: any[]) => string);
  xdiv:   number;

  ylab:   Units;
  ylabel: string | ((...args: any[]) => string);
  ydiv:   number;

  nsec:      number;
  anno_type: number;

  /** Number of colors to draw (default is 16) */
  ncolors:   number;

  always_show_marker: boolean;
  autohide_readout: boolean;
  autohide_panbars: boolean;

  /**
   * Combined with 'all' = true will cause y-axis to expand automatically to
   * show all data.
   */
  expand: boolean;

  origin: Origin;

  bufmax: number;

  nokeypress: boolean;
  hide_note: boolean;

  font_family: string;

  /** 'xi' stands for invert fg and bg defined in 'colors' */
  set xi(b: boolean) { this.invert = b; }
  get xi(): boolean { return this.invert; }

  set nogrid(b: boolean) { this.grid = !b; }
  get nogrid(): boolean { return !this.grid; }

  set nopan(b: boolean) { this.pan = !b; }
  get nopan(): boolean { return !this.pan; }

  set nospecs(b: boolean) { this.specs = !b; }
  get nospecs(): boolean { return !this.specs; }

  set noxaxis(b: boolean) { this.show_x_axis = !b; }
  get noxaxis(): boolean { return !this.show_x_axis; }

  set noyaxis(b: boolean) { this.show_y_axis = !b; }
  get noyaxis(): boolean { return !this.show_y_axis; }

  set noreadout(b: boolean) { this.show_readout = !b; }
  get noreadout(): boolean { return !this.show_readout; }

  set smoothing(b: boolean) { this.rasterSmoothing = b; }
  get smoothing(): boolean { return this.rasterSmoothing; }

  constructor () {
    super();
    this.xlab = Units.Time;
    this.ylab = Units.Amplitude;
    this.xlabel = () => Units[this.xlab];
    this.ylabel = () => Units[this.ylab];
  }

  /**
   * Export the settings as an IConstructorOptions interface
   */
  toInterface(): IConstructorOptions {
    let o = super.toInterface() as IConstructorOptions;

    // Copy in the remaining interface elements.
    o.no_legend_button = this.no_legend_button;
    o.nodragdrop = this.nodragdrop;

    o.scroll_time_interval = this.scroll_time_interval;

    o.x_scrollbar_location = this.x_scrollbar_location;

    o.xlab      = this.xlab;
    o.xlabel    = this.xlabel;
    o.xdiv      = this.xdiv;

    o.ylab      = this.ylab;
    o.ylabel    = this.ylabel;
    o.ydiv      = this.ydiv;

    o.nsec      = this.nsec;
    o.anno_type = this.anno_type;
    o.ncolors   = this.ncolors;
    o.xi        = this.xi;

    o.always_show_marker = this.always_show_marker;
    o.autohide_readout = this.autohide_readout;
    o.autohide_panbars = this.autohide_panbars;

    o.expand    = this.expand;

    o.origin    = this.origin;

    o.bufmax    = this.bufmax;

    o.nokeypress = this.nokeypress;
    o.hide_note  = this.hide_note;

    o.font_family = this.font_family;

    o.nogrid    = this.nogrid;
    o.nopan     = this.nopan;
    o.nospecs   = this.nospecs;
    o.noxaxis   = this.noxaxis;
    o.noyaxis   = this.noyaxis;
    o.noreadout = this.noreadout;
    o.smoothing = this.smoothing;

    // Strip undefined members, re-set the x|ylabel ones.
    o = JSON.parse(JSON.stringify(o));
    o.xlabel = () => Units[this.xlab];
    o.ylabel = () => Units[this.ylab];
    return o;
  }
}

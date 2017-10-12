/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 *
 * Purpose: Settings Options Interface and Class
 */
import {
  ISettingsOptions,
  IGridStyle,
  IPlotColors
} from './sigplot';

import { Mc, IColorMap } from '../m';

import {
  AutoScale,
  CMode,
  DrawMode,
  PHUnits,
  RubberboxAction,
  RubberboxMode,
  XCNT
} from './enums';

/**
 * SettingsOptions are the runtime settings used in SigPlot's top-level Plot.
 *
 * While largely similar to the ISettingsOptions interface, this class uses the
 * enumerations in SigPlot-TS to avoid, "magic numbers," and related issues.
 * @preferred
 */
export class SettingsOptions {

  xyKeys:         string;

  /** Controls the visibility of the grid */
  grid:           boolean;

  /** HTML5 canvas fillStyle (so "red" or an array, etc.) */
  gridBackground: string | Array<string>;
  /** Styling for the background grid on 1D plots, if enabled */
  gridStyle:      IGridStyle;
  /** HTML5 canvas fillStyle (so "red" or an array, etc.) */
  fillStyle:      string | Array<string>;

  index:        boolean;
  all:          boolean;
  show_x_axis:  boolean;
  show_y_axis:  boolean;
  show_readout: boolean;
  specs:        boolean;
  legend:       boolean;

  /** Controls visibility of scroll bars */
  pan:          boolean;

  /** Enables/disables the mouse cursor being a cross(hair) */
  cross:        boolean;

  wheelscroll_mode_natural: string;
  wheelZoom:                boolean;
  wheelZoomPercent:         number;

  /** Controls foreground and background colors */
  colors:          IPlotColors;

  /**
   * For 2D plots, controls the colors used to draw the magnitude of a data point
   * See m.Mc.colormap (in SigPlot) for explicit declarations corresponding to the
   * Mc enumeration.
   */
  cmap:            number | Mc | string | IColorMap;

  /** Controls raster smoothing, use null to toggle */
  rasterSmoothing: boolean;

  /** Controls inverting foreground and background colors, use null to toggle */
  invert:          boolean;

  /** Controls access to the menu, use null to toggle */
  nomenu:          boolean;

  note:                   object;
  lg_colorbar:            boolean;

  enabled_streaming_pcut: boolean;
  p_cuts:                 boolean;

  xinv:     boolean;
  xmax:     number;
  xmin:     number;
  autox:    AutoScale;
  xcut_now: boolean;

  yinv:     boolean;
  ymax:     number;
  ymin:     number;
  autoy:    AutoScale;
  ycut_now: boolean;

  zinv:     boolean;
  zmax:     number;
  zmin:     number;
  autoz:    AutoScale;

  autol:    AutoScale;

  cmode:                       CMode;
  drawmode:                    DrawMode;
  phunits:                     PHUnits;

  rubberbox_mode:              RubberboxMode;
  rubberbox_action:            RubberboxAction;
  rightclick_rubberbox_mode:   RubberboxMode;
  rightclick_rubberbox_action: RubberboxAction;

  xcnt: XCNT;

  /** Merge two ISettingsOptions -based interfaces together */
  static interfaceMerge(source: any, dest: any) {
    for (let k in source) {
      if ((typeof source[k] == 'function') || (typeof dest[k] == 'function')) {
        continue;
      }

      if (['autox', 'autoy', 'autoz', 'autol'].indexOf(k) > -1) {
        dest[k] = source[k] as AutoScale;
      } else if (k == 'cmode') {
        dest[k] = CMode[source[k]];
      } else if (k == 'drawmode') {
        dest[k] = DrawMode[source[k]];
      } else if (k == 'phunits') {
        dest[k] = PHUnits[source[k]];
      } else if (['rubberbox_mode', 'rightclick_rubberbox_mode'].indexOf(k) > -1) {
        dest[k] = RubberboxMode[source[k]];
      } else if (['rubberbox_action', 'rightclick_rubberbox_action'].indexOf(k) > -1) {
        dest[k] = RubberboxAction[source[k]];
      } else if (k == 'xcnt') {
        dest[k] = XCNT[source[k]];
      } else {
        dest[k] = source[k];
      }
    }
  }

  /** Convert to the ISettingsOptions interface */
  toInterface(): ISettingsOptions {
    let s: ISettingsOptions = {};
    SettingsOptions.interfaceMerge(this, s);
    return JSON.parse(JSON.stringify(s));
  }

  /** Import settings from an ISettingsOptions interface */
  fromInterface(s: ISettingsOptions) {
    SettingsOptions.interfaceMerge(s, this);
  }
}
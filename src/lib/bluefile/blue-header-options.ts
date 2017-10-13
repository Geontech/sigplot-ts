/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 */
import { FormatSize, FormatType, format } from './format/index';
import { Units } from '../m/index';

import { IBlueHeaderOptions } from './bluefile';
import { AxisData } from './axis-data';

/**
 * Sometimes called 'hdrmod' and 'overrides' for various sigplot.Plot() methods,
 * in each case, these are just BlueFile Header interface elements for either
 * type 1000, 2000, etc. signals.
 *
 * See SigPlot for more information.
 * @preferred
 */
export class BlueHeaderOptions implements IBlueHeaderOptions {
    version:   string;
    type:      number;
    get class(): number { return this.type / 1000; }
    get format(): string { return format(this._formatSize, this._formatType); }
    timecode:  number;

    xstart:  number;
    xdelta:  number;
    xunits:  Units;

    ystart:  number;
    ydelta:  number;
    yunits:  Units;

    subsize: number;

    private _formatSize: FormatSize;
    private _formatType: FormatType;

    /** 1-D Data, like raw signal data */
    static type1000(
        formatSize: FormatSize,
        formatType: FormatType,
        xAxis:      AxisData,
        timecode?:  number): IBlueHeaderOptions {
        // ---------------------------------- //
        const bho = new BlueHeaderOptions(
            1000,
            formatSize,
            formatType,
            xAxis,
            undefined,
            undefined,
            timecode);
        return JSON.parse(JSON.stringify(bho));
    }

    /** 2-D Data, like falling rasters, etc. */
    static type2000(
        formatSize: FormatSize,
        formatType: FormatType,
        xAxis:      AxisData,
        yAxis:      AxisData,
        subsize?:   number,
        timecode?:  number): IBlueHeaderOptions {
        // ---------------------------------- //
        const bho = new BlueHeaderOptions(2000,
            formatSize,
            formatType,
            xAxis,
            yAxis,
            subsize,
            timecode);
        return JSON.parse(JSON.stringify(bho));
    }

    /**
     * @param type - The numeric type (1000, 2000)
     * @param formatSize - The size of the data values (int8, etc.)
     * @param formatType - Ordering of the data (x, x+y, x+y+z, etc.)
     * @param xAxis - Data settings for the X axis
     * @param yAxis - Data settings for the Y axis
     * @param subsize - The subsize of the data (matrices, etc.)
     * @param timecode - The time code associated with the data.
     */
    constructor(
        type:       number,
        formatSize: FormatSize,
        formatType: FormatType,
        xAxis:      AxisData,
        yAxis:      AxisData = {},
        subsize?:   number,
        timecode?:  number
        ) {
        this.type = type;

        this._formatSize = formatSize;
        this._formatType = formatType;

        this.xstart = xAxis.start;
        this.xdelta = xAxis.delta;
        this.xunits = xAxis.units;

        this.ystart = yAxis.start;
        this.ydelta = yAxis.delta;
        this.yunits = yAxis.units;

        this.subsize = subsize;
        this.timecode = timecode;
    }
}

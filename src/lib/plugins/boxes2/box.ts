import { SideFeature } from './side-feature';

/**
 * Standard Box interface
 */
export interface Box {
    /** X-position, top left corner */
    x: number;
    /** Y-position, top left corner */
    y: number;
    /** Width of the box */
    width: number;
    /** Height of the box */
    height: number;

    /** If true, places the box relative to the */
    absolutePlacement?: boolean;

    /** Annotation text */
    text?: {
        /** Text to display with the box */
        value: string,
        /** Font style (CSS) */
        font?: string
    };

    /** Fill Controls */
    fill?: {
        /** Fill style (color string, gradient, or pattern) */
        style?: any,
        /** Alpha for the box (transparency, 0-1.0) */
        alpha?: number
    };

    /** Left side */
    leftSide?: SideFeature;
    /** Top side */
    topSide?: SideFeature;
    /** Right side */
    rightSide?: SideFeature;
    /** Bottom side */
    bottomSide?: SideFeature;
}

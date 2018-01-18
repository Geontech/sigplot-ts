/**
 * Describes how/what to draw for a side
 */
export interface SideFeature {
    /** Stroke style (color string, gradient, or pattern) */
    strokeStyle?: any;
    lineWidth?: number;
    lineCap?: 'butt' | 'round' | 'square';
}

export declare type PointLike = {
    x: number;
    y: number;
};
/** @constant {number} */
export declare const UP: number;
export declare const DOWN: number;
export declare const LEFT: number;
export declare const RIGHT = 0;
export declare const NORTH: number;
export declare const SOUTH: number;
export declare const WEST: number;
export declare const EAST = 0;
export declare const NORTH_WEST: number;
export declare const NORTH_EAST: number;
export declare const SOUTH_WEST: number;
export declare const SOUTH_EAST: number;
export declare const PI_2: number;
export declare const PI_QUARTER: number;
export declare const PI_HALF: number;
/**
 * converts from radians to degrees (all other functions expect radians)
 * @param {number} radians
 * @return {number} degrees
 */
export declare function toDegrees(radians: number): number;
/**
 * converts from degrees to radians (all other functions expect radians)
 * @param {number} degrees
 * @return {number} radians
 */
export declare function toRadians(degrees: number): number;
/**
 * returns whether the target angle is between angle1 and angle2 (in radians)
 * (based on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles)
 * @param {number} target angle
 * @param {number} angle1
 * @param {number} angle2
 * @return {boolean}
 */
export declare function isAngleBetween(target: number, angle1: number, angle2: number): boolean;
/**
 * returns +1 or -1 based on whether the difference between two angles is positive or negative (in radians)
 * @param {number} target angle
 * @param {number} source angle
 * @return {number} 1 or -1
 */
export declare function differenceAnglesSign(target: number, source: number): -1 | 1;
/**
 * returns the normalized difference between two angles (in radians)
 * @param {number} a - first angle
 * @param {number} b - second angle
 * @return {number} normalized difference between a and b
 */
export declare function differenceAngles(a: number, b: number): number;
/**
 * returns a target angle that is the shortest way to rotate an object between start and to--may choose a negative angle
 * @param {number} start
 * @param {number} to
 * @return {number} shortest target angle
 */
export declare function shortestAngle(start: number, to: number): number;
/**
 * returns the normalized angle (0 - PI x 2)
 * @param {number} radians
 * @return {number} normalized angle in radians
 */
export declare function normalize(radians: number): number;
/**
 * returns angle between two points (in radians)
 * @param {Point} [point1] {x: x, y: y}
 * @param {Point} [point2] {x: x, y: y}
 * @param {number} [x1]
 * @param {number} [y1]
 * @param {number} [x2]
 * @param {number} [y2]
 * @return {number} angle
 */
export declare function angleTwoPoints(point1: PointLike, point2: PointLike): number;
export declare function angleTwoPoints(x1: number, y1: number, x2: number, y2: number): number;
/**
 * returns distance between two points
 * @param {Point} [point1] {x: x, y: y}
 * @param {Point} [point2] {x: x, y: y}
 * @param {number} [x1]
 * @param {number} [y1]
 * @param {number} [x2]
 * @param {number} [y2]
 * @return {number} distance
 */
export declare function distanceTwoPoints(point1: PointLike, point2: PointLike): number;
export declare function distanceTwoPoints(x1: number, y1: number, x2: number, y2: number): number;
/**
 * returns the squared distance between two points
 * @param {Point} [point1] {x: x, y: y}
 * @param {Point} [point2] {x: x, y: y}
 * @param {number} [x1]
 * @param {number} [y1]
 * @param {number} [x2]
 * @param {number} [y2]
 * @return {number} squared distance
 */
export declare function distanceTwoPointsSquared(point1: PointLike, point2: PointLike): number;
export declare function distanceTwoPointsSquared(x1: number, y1: number, x2: number, y2: number): number;
/**
 * returns the closest cardinal (N, S, E, W) to the given angle (in radians)
 * @param {number} angle
 * @return {number} closest cardinal in radians
 */
export declare function closestAngle(angle: number): number;
/**
 * returns the closest cardinal w/diagonal (N, S, E, W, NE, NW, SE, SW) to the given angle (in radians)
 * @param {number} angle
 * @return {number} closest cardinal in radians
 */
export declare function closestAngle2(angle: number): number;
/**
 * checks whether angles a1 and a2 are equal (after normalizing)
 * @param {number} a1
 * @param {number} a2
 * @param {number} [wiggle] return true if the difference between the angles is <= wiggle
 * @return {boolean} a1 === a2
 */
export declare function equals(a1: number, a2: number, wiggle: number): boolean;
/**
 * return a text representation of the cardinal direction
 * @param {number} angle
 * @returns {string} UP, DOWN, LEFT, RIGHT, or NOT CARDINAL
 */
export declare function explain(angle: number): string;
/**
 * returns a text representation of the closest cardinal w/diagonal (N, S, E, W, NE, NW, SE, SW) to the given angle
 * @param {number} angle
 * @return {string} NORTH, WEST, EAST, SOUTH, NORTH_EAST, NORTH_WEST, SOUTH_EAST, SOUTH_WEST
 */
export declare function explain2(angle: number): string;

// angle.js <https://github.com/davidfig/anglejs>
// Released under MIT license <https://github.com/davidfig/angle/blob/master/LICENSE>
// Author: David Figatner
// Copyright (c) 2016-21 YOPEY YOPEY LLC

export type PointLike = {
    x: number
    y: number
}

const _toDegreeConversion = 180 / Math.PI
const _toRadianConversion = Math.PI / 180

/** @constant {number} */
export const UP = Math.PI / 2
export const DOWN = 3 * Math.PI / 2
export const LEFT = Math.PI
export const RIGHT = 0

export const NORTH = UP
export const SOUTH = DOWN
export const WEST = LEFT
export const EAST = RIGHT

export const NORTH_WEST = (NORTH + WEST) / 2
export const NORTH_EAST = (NORTH + EAST) / 2
export const SOUTH_WEST = (SOUTH + WEST) / 2
export const SOUTH_EAST = (SOUTH + EAST) / 2

export const PI_2 = Math.PI * 2
export const PI_QUARTER = Math.PI / 4
export const PI_HALF = Math.PI / 2

/**
 * converts from radians to degrees (all other functions expect radians)
 * @param {number} radians
 * @return {number} degrees
 */
export function toDegrees(radians: number): number {
    return radians * _toDegreeConversion
}

/**
 * converts from degrees to radians (all other functions expect radians)
 * @param {number} degrees
 * @return {number} radians
 */
export function toRadians(degrees: number): number {
    return degrees * _toRadianConversion
}

/**
 * returns whether the target angle is between angle1 and angle2 (in radians)
 * (based on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles)
 * @param {number} target angle
 * @param {number} angle1
 * @param {number} angle2
 * @return {boolean}
 */
export function isAngleBetween(target: number, angle1: number, angle2: number): boolean {
    var rAngle = ((angle2 - angle1) % PI_2 + PI_2) % PI_2
    if (rAngle >= Math.PI) {
        var swap = angle1
        angle1 = angle2
        angle2 = swap
    }

    if (angle1 <= angle2) {
        return target >= angle1 && target <= angle2
    }
    else {
        return target >= angle1 || target <= angle2
    }
}

/**
 * returns +1 or -1 based on whether the difference between two angles is positive or negative (in radians)
 * @param {number} target angle
 * @param {number} source angle
 * @return {number} 1 or -1
 */
export function differenceAnglesSign(target: number, source: number): -1 | 1 {
    function mod(a, n) {
        return (a % n + n) % n
    }

    var a = target - source
    return mod((a + Math.PI), PI_2) - Math.PI > 0 ? 1 : -1
}

/**
 * returns the normalized difference between two angles (in radians)
 * @param {number} a - first angle
 * @param {number} b - second angle
 * @return {number} normalized difference between a and b
 */
export function differenceAngles(a: number, b: number): number {
    var c = Math.abs(a - b) % PI_2
    return c > Math.PI ? (PI_2 - c) : c
}

/**
 * returns a target angle that is the shortest way to rotate an object between start and to--may choose a negative angle
 * @param {number} start
 * @param {number} to
 * @return {number} shortest target angle
 */
export function shortestAngle(start: number, to: number): number {
    var difference = differenceAngles(to, start)
    var sign = differenceAnglesSign(to, start)
    var delta = difference * sign
    return delta + start
}

/**
 * returns the normalized angle (0 - PI x 2)
 * @param {number} radians
 * @return {number} normalized angle in radians
 */
export function normalize(radians: number): number {
    return radians - PI_2 * Math.floor(radians / PI_2)
}

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
export function angleTwoPoints(point1: PointLike, point2: PointLike): number
export function angleTwoPoints(x1: number, y1: number, x2: number, y2: number): number
export function angleTwoPoints(x1Point1: any, y1Point2: any, x2?: number, y2?: number): number {
    if (typeof x1Point1 === 'number') {
        const x1 = x1Point1 as number
        const y1 = y1Point2 as number
        return Math.atan2(y2 - y1, x2 - x1)
    } else {
        const pt1 = x1Point1 as PointLike
        const pt2 = y1Point2 as PointLike
        return Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x)
    }
}

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
export function distanceTwoPoints(point1: PointLike, point2: PointLike): number
export function distanceTwoPoints(x1: number, y1: number, x2: number, y2: number): number
export function distanceTwoPoints(x1Point1: PointLike | number, y1Point2: PointLike | number, x2?: number, y2?: number): number {
    if (typeof x1Point1 === 'number') {
        const x1 = x1Point1 as number
        const y1 = y1Point2 as number
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    } else {
        const pt1 = x1Point1 as PointLike
        const pt2 = y1Point2 as PointLike
        return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2))
    }
}

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
export function distanceTwoPointsSquared(point1: PointLike, point2: PointLike): number
export function distanceTwoPointsSquared(x1: number, y1: number, x2: number, y2: number): number
export function distanceTwoPointsSquared(x1Point1: PointLike | number, y1Point2: number | PointLike, x2?: number, y2?: number): number {
    if (typeof x1Point1 === 'number') {
        const x1 = x1Point1 as number
        const y1 = y1Point2 as number
        return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    } else {
        const pt1 = x1Point1 as PointLike
        const pt2 = y1Point2 as PointLike
        return Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2)
    }
}

/**
 * returns the closest cardinal (N, S, E, W) to the given angle (in radians)
 * @param {number} angle
 * @return {number} closest cardinal in radians
 */
export function closestAngle(angle: number): number {
    const left = differenceAngles(angle, LEFT)
    const right = differenceAngles(angle, RIGHT)
    const up = differenceAngles(angle, UP)
    const down = differenceAngles(angle, DOWN)
    if (left <= right && left <= up && left <= down) {
        return LEFT
    }
    else if (right <= up && right <= down) {
        return RIGHT
    }
    else if (up <= down) {
        return UP
    }
    else {
        return DOWN
    }
}

/**
 * returns the closest cardinal w/diagonal (N, S, E, W, NE, NW, SE, SW) to the given angle (in radians)
 * @param {number} angle
 * @return {number} closest cardinal in radians
 */
export function closestAngle2(angle: number): number {
    const directions = {
        north: { name: 'NORTH', angle: NORTH },
        west: { name: 'WEST', angle: WEST },
        east: { name: 'EAST', angle: EAST },
        south: { name: 'SOUTH', angle: SOUTH },
        northEast: { name: 'NORTH_EAST', angle: NORTH_EAST },
        northWest: { name: 'NORTH_WEST', angle: NORTH_WEST },
        southEast: { name: 'SOUTH_EAST', angle: SOUTH_EAST },
        southWest: { name: 'SOUTH_WEST', angle: SOUTH_WEST },
    }
    const closest = { name: '', angle: 0, difference: Infinity }
    for (const key in directions) {
        const difference = differenceAngles(angle, directions[key].angle)
        if (difference < closest.difference) {
            closest.difference = difference
            closest.name = directions[key].name
            closest.angle = directions[key].angle
        }
    }
    return closest.angle
}

/**
 * checks whether angles a1 and a2 are equal (after normalizing)
 * @param {number} a1
 * @param {number} a2
 * @param {number} [wiggle] return true if the difference between the angles is <= wiggle
 * @return {boolean} a1 === a2
 */
export function equals(a1: number, a2: number, wiggle: number): boolean {
    if (wiggle) {
        return differenceAngles(a1, a2) < wiggle
    }
    else {
        return normalize(a1) === normalize(a2)
    }
}

/**
 * return a text representation of the cardinal direction
 * @param {number} angle
 * @returns {string} UP, DOWN, LEFT, RIGHT, or NOT CARDINAL
 */
export function explain(angle: number): string {
    switch (angle) {
        case UP: return 'UP'
        case DOWN: return 'DOWN'
        case LEFT: return 'LEFT'
        case RIGHT: return 'RIGHT'
        default: return 'NOT CARDINAL'
    }
}

/**
 * returns a text representation of the closest cardinal w/diagonal (N, S, E, W, NE, NW, SE, SW) to the given angle
 * @param {number} angle
 * @return {string} NORTH, WEST, EAST, SOUTH, NORTH_EAST, NORTH_WEST, SOUTH_EAST, SOUTH_WEST
 */
export function explain2(angle: number): string {
    const directions = {
        north: { name: 'NORTH', angle: NORTH },
        west: { name: 'WEST', angle: WEST },
        east: { name: 'EAST', angle: EAST },
        south: { name: 'SOUTH', angle: SOUTH },
        northEast: { name: 'NORTH_EAST', angle: NORTH_EAST },
        northWest: { name: 'NORTH_WEST', angle: NORTH_WEST },
        southEast: { name: 'SOUTH_EAST', angle: SOUTH_EAST },
        southWest: { name: 'SOUTH_WEST', angle: SOUTH_WEST },
    }
    const closest = { name: '', angle: 0, difference: Infinity }
    for (const key in directions) {
        const difference = differenceAngles(angle, directions[key].angle)
        if (difference < closest.difference) {
            closest.difference = difference
            closest.name = directions[key].name
            closest.angle = directions[key].angle
        }
    }
    return closest.name
}
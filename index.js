"use strict";
// angle.js <https://github.com/davidfig/anglejs>
// Released under MIT license <https://github.com/davidfig/angle/blob/master/LICENSE>
// Author: David Figatner
// Copyright (c) 2016-21 YOPEY YOPEY LLC
Object.defineProperty(exports, "__esModule", { value: true });
exports.explain2 = exports.explain = exports.equals = exports.closestAngle2 = exports.closestAngle = exports.distanceTwoPointsSquared = exports.distanceTwoPoints = exports.angleTwoPoints = exports.normalize = exports.shortestAngle = exports.differenceAngles = exports.differenceAnglesSign = exports.isAngleBetween = exports.toRadians = exports.toDegrees = exports.PI_HALF = exports.PI_QUARTER = exports.PI_2 = exports.SOUTH_EAST = exports.SOUTH_WEST = exports.NORTH_EAST = exports.NORTH_WEST = exports.EAST = exports.WEST = exports.SOUTH = exports.NORTH = exports.RIGHT = exports.LEFT = exports.DOWN = exports.UP = void 0;
var _toDegreeConversion = 180 / Math.PI;
var _toRadianConversion = Math.PI / 180;
/** @constant {number} */
exports.UP = Math.PI / 2;
exports.DOWN = 3 * Math.PI / 2;
exports.LEFT = Math.PI;
exports.RIGHT = 0;
exports.NORTH = exports.UP;
exports.SOUTH = exports.DOWN;
exports.WEST = exports.LEFT;
exports.EAST = exports.RIGHT;
exports.NORTH_WEST = (exports.NORTH + exports.WEST) / 2;
exports.NORTH_EAST = (exports.NORTH + exports.EAST) / 2;
exports.SOUTH_WEST = (exports.SOUTH + exports.WEST) / 2;
exports.SOUTH_EAST = (exports.SOUTH + exports.EAST) / 2;
exports.PI_2 = Math.PI * 2;
exports.PI_QUARTER = Math.PI / 4;
exports.PI_HALF = Math.PI / 2;
/**
 * converts from radians to degrees (all other functions expect radians)
 * @param {number} radians
 * @return {number} degrees
 */
function toDegrees(radians) {
    return radians * _toDegreeConversion;
}
exports.toDegrees = toDegrees;
/**
 * converts from degrees to radians (all other functions expect radians)
 * @param {number} degrees
 * @return {number} radians
 */
function toRadians(degrees) {
    return degrees * _toRadianConversion;
}
exports.toRadians = toRadians;
/**
 * returns whether the target angle is between angle1 and angle2 (in radians)
 * (based on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles)
 * @param {number} target angle
 * @param {number} angle1
 * @param {number} angle2
 * @return {boolean}
 */
function isAngleBetween(target, angle1, angle2) {
    var rAngle = ((angle2 - angle1) % exports.PI_2 + exports.PI_2) % exports.PI_2;
    if (rAngle >= Math.PI) {
        var swap = angle1;
        angle1 = angle2;
        angle2 = swap;
    }
    if (angle1 <= angle2) {
        return target >= angle1 && target <= angle2;
    }
    else {
        return target >= angle1 || target <= angle2;
    }
}
exports.isAngleBetween = isAngleBetween;
/**
 * returns +1 or -1 based on whether the difference between two angles is positive or negative (in radians)
 * @param {number} target angle
 * @param {number} source angle
 * @return {number} 1 or -1
 */
function differenceAnglesSign(target, source) {
    function mod(a, n) {
        return (a % n + n) % n;
    }
    var a = target - source;
    return mod((a + Math.PI), exports.PI_2) - Math.PI > 0 ? 1 : -1;
}
exports.differenceAnglesSign = differenceAnglesSign;
/**
 * returns the normalized difference between two angles (in radians)
 * @param {number} a - first angle
 * @param {number} b - second angle
 * @return {number} normalized difference between a and b
 */
function differenceAngles(a, b) {
    var c = Math.abs(a - b) % exports.PI_2;
    return c > Math.PI ? (exports.PI_2 - c) : c;
}
exports.differenceAngles = differenceAngles;
/**
 * returns a target angle that is the shortest way to rotate an object between start and to--may choose a negative angle
 * @param {number} start
 * @param {number} to
 * @return {number} shortest target angle
 */
function shortestAngle(start, to) {
    var difference = differenceAngles(to, start);
    var sign = differenceAnglesSign(to, start);
    var delta = difference * sign;
    return delta + start;
}
exports.shortestAngle = shortestAngle;
/**
 * returns the normalized angle (0 - PI x 2)
 * @param {number} radians
 * @return {number} normalized angle in radians
 */
function normalize(radians) {
    return radians - exports.PI_2 * Math.floor(radians / exports.PI_2);
}
exports.normalize = normalize;
function angleTwoPoints(x1Point1, y1Point2, x2, y2) {
    if (typeof x1Point1 === 'number') {
        var x1 = x1Point1;
        var y1 = y1Point2;
        return Math.atan2(y2 - y1, x2 - x1);
    }
    else {
        var pt1 = x1Point1;
        var pt2 = y1Point2;
        return Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
    }
}
exports.angleTwoPoints = angleTwoPoints;
function distanceTwoPoints(x1Point1, y1Point2, x2, y2) {
    if (typeof x1Point1 === 'number') {
        var x1 = x1Point1;
        var y1 = y1Point2;
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    else {
        var pt1 = x1Point1;
        var pt2 = y1Point2;
        return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
    }
}
exports.distanceTwoPoints = distanceTwoPoints;
function distanceTwoPointsSquared(x1Point1, y1Point2, x2, y2) {
    if (typeof x1Point1 === 'number') {
        var x1 = x1Point1;
        var y1 = y1Point2;
        return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    }
    else {
        var pt1 = x1Point1;
        var pt2 = y1Point2;
        return Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2);
    }
}
exports.distanceTwoPointsSquared = distanceTwoPointsSquared;
/**
 * returns the closest cardinal (N, S, E, W) to the given angle (in radians)
 * @param {number} angle
 * @return {number} closest cardinal in radians
 */
function closestAngle(angle) {
    var left = differenceAngles(angle, exports.LEFT);
    var right = differenceAngles(angle, exports.RIGHT);
    var up = differenceAngles(angle, exports.UP);
    var down = differenceAngles(angle, exports.DOWN);
    if (left <= right && left <= up && left <= down) {
        return exports.LEFT;
    }
    else if (right <= up && right <= down) {
        return exports.RIGHT;
    }
    else if (up <= down) {
        return exports.UP;
    }
    else {
        return exports.DOWN;
    }
}
exports.closestAngle = closestAngle;
/**
 * returns the closest cardinal w/diagonal (N, S, E, W, NE, NW, SE, SW) to the given angle (in radians)
 * @param {number} angle
 * @return {number} closest cardinal in radians
 */
function closestAngle2(angle) {
    var directions = {
        north: { name: 'NORTH', angle: exports.NORTH },
        west: { name: 'WEST', angle: exports.WEST },
        east: { name: 'EAST', angle: exports.EAST },
        south: { name: 'SOUTH', angle: exports.SOUTH },
        northEast: { name: 'NORTH_EAST', angle: exports.NORTH_EAST },
        northWest: { name: 'NORTH_WEST', angle: exports.NORTH_WEST },
        southEast: { name: 'SOUTH_EAST', angle: exports.SOUTH_EAST },
        southWest: { name: 'SOUTH_WEST', angle: exports.SOUTH_WEST },
    };
    var closest = { name: '', angle: 0, difference: Infinity };
    for (var key in directions) {
        var difference = differenceAngles(angle, directions[key].angle);
        if (difference < closest.difference) {
            closest.difference = difference;
            closest.name = directions[key].name;
            closest.angle = directions[key].angle;
        }
    }
    return closest.angle;
}
exports.closestAngle2 = closestAngle2;
/**
 * checks whether angles a1 and a2 are equal (after normalizing)
 * @param {number} a1
 * @param {number} a2
 * @param {number} [wiggle] return true if the difference between the angles is <= wiggle
 * @return {boolean} a1 === a2
 */
function equals(a1, a2, wiggle) {
    if (wiggle) {
        return differenceAngles(a1, a2) < wiggle;
    }
    else {
        return normalize(a1) === normalize(a2);
    }
}
exports.equals = equals;
/**
 * return a text representation of the cardinal direction
 * @param {number} angle
 * @returns {string} UP, DOWN, LEFT, RIGHT, or NOT CARDINAL
 */
function explain(angle) {
    switch (angle) {
        case exports.UP: return 'UP';
        case exports.DOWN: return 'DOWN';
        case exports.LEFT: return 'LEFT';
        case exports.RIGHT: return 'RIGHT';
        default: return 'NOT CARDINAL';
    }
}
exports.explain = explain;
/**
 * returns a text representation of the closest cardinal w/diagonal (N, S, E, W, NE, NW, SE, SW) to the given angle
 * @param {number} angle
 * @return {string} NORTH, WEST, EAST, SOUTH, NORTH_EAST, NORTH_WEST, SOUTH_EAST, SOUTH_WEST
 */
function explain2(angle) {
    var directions = {
        north: { name: 'NORTH', angle: exports.NORTH },
        west: { name: 'WEST', angle: exports.WEST },
        east: { name: 'EAST', angle: exports.EAST },
        south: { name: 'SOUTH', angle: exports.SOUTH },
        northEast: { name: 'NORTH_EAST', angle: exports.NORTH_EAST },
        northWest: { name: 'NORTH_WEST', angle: exports.NORTH_WEST },
        southEast: { name: 'SOUTH_EAST', angle: exports.SOUTH_EAST },
        southWest: { name: 'SOUTH_WEST', angle: exports.SOUTH_WEST },
    };
    var closest = { name: '', angle: 0, difference: Infinity };
    for (var key in directions) {
        var difference = differenceAngles(angle, directions[key].angle);
        if (difference < closest.difference) {
            closest.difference = difference;
            closest.name = directions[key].name;
            closest.angle = directions[key].angle;
        }
    }
    return closest.name;
}
exports.explain2 = explain2;
//# sourceMappingURL=index.js.map
/**
 * @license
 * anglejs.js <https://github.com/davidfig/anglejs>
 * Released under MIT license <https://github.com/davidfig/anglejs/license>
 * Author David Figatner and other contributors
 * Copyright YOPEY YOPEY LLC and other contributors
 */

/** @const {number} */
var UP = Math.PI / 2;

/** @const {number} */
var DOWN = 3 * Math.PI / 2;

/** @const {number} */
var LEFT = Math.PI;

/** @const {number} */
var RIGHT = 0;

/** @const {number} */
var NORTH = UP;

/** @const {number} */
var SOUTH = DOWN;

/** @const {number} */
var WEST = LEFT;

/** @const {number} */
var EAST = RIGHT;

/** @const {number} */
var PI_2 = Math.PI * 2;

var _toDegreeConversion = 180 / Math.PI;
var _toRadianConversion = Math.PI / 180;

/**
 * Radian to Degrees
 * @param {number} radian
 * @returns {number} degrees
 */
function toDegrees(radians)
{
    return radians * Angle._toDegreeConversion;
}

/**
 * Degrees to Radians
 * @param {number} degrees
 * @returns {number} radian
 */
function toRadians(degrees)
{
    return radians * Angle._toRadianConversion;
}

/**
 * Checks whether the target is between angle1 and angle2 (all in radians)
 * baed on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles
 * @param  {number}  target
 * @param  {number}  angle1
 * @param  {number}  angle2
 * @return {Boolean}
 */
function isAngleBetween(target, angle1, angle2)
{
    var rAngle = ((angle2 - angle1) % PI_2 + PI_2) % PI_2;
    if (rAngle >= Math.PI)
    {
        var swap = angle1;
        angle1 = angle2;
        angle2 = swap;
    }

    // check if it passes through zero
    if (angle1 <= angle2)
    {
        return target >= angle1 && target <= angle2;
    }
        else
    {
        return target >= angle1 || target <= angle2;
    }
}

/**
 * determines whether the difference between twoangles is positive or negative (all in radians)
 * @param  {number} target angle
 * @param  {number} source angle
 * @return {number}
 */

function differenceAnglesSign(target, source)
{
    function mod(a, n)
    {
        return (a % n + n) % n;
    }

    var a = target - source;
    return mod((a + PI), PIx2) - PI > 0 ? 1 : -1;
}

/**
 * determines the normalized difference between two angles (radians)
 * @param {number} a in radians
 * @param {number} b in radians
 */

function differenceAngles(a, b)
{
    var c = Math.abs(a - b) % PIx2;
    return c > PI ? (PIx2 - c) : c;
}

/**
 * normalizes angle between 0 - PIx2 (radians)
 * @param  {number} radians
 * @return {number}
 */

function normalize(radian)
{
    return radians - PIx2 * Math.floor(radians / PIx2);
}

/**
 * finds angle between two points (radians)
 * also accepts 2 point objects {x: x, y: y}
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @return {number} radian
 */

function angleTwoPoints()
{
    if (arguments.length === 4)
    {
        return Math.atan2(arguments[3] - arguments[1], arguments[2] - arguments[0]);
    }
    else
    {
        return Math.atan2(arguments[1].y - arguments[0].y, arguments[1].x - arguments[0].x);
    }
}

/**
 * finds distance between two points
 * also accepts 2 point objects {x: x, y: y}
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @return {number} radian
 */

function distanceTwoPoints()
{
    if (arguments.length === 2)
    {
        return Math.sqrt(Math.pow(arguments[1].x - arguments[0].x, 2) + Math.pow(arguments[1].y - arguments[0].y, 2));
    }
    else
    {
        return Math.sqrt(Math.pow(arguments[2] - arguments[0], 2) + Math.pow(arguments[3] - arguments[1], 2));
    }
}

/**
 * finds the square distance between two points
 * also accepts 2 point objects {x: x, y: y}
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @return {number} radian
 */
function distanceTwoPointsSquared()
{
    if (arguments.length === 2)
    {
        return Math.pow(arguments[1].x - arguments[0].x, 2) + Math.pow(arguments[1].y - arguments[0].y, 2);
    }
    else
    {
        return Math.pow(arguments[2] - arguments[0], 2) + Math.pow(arguments[3] - arguments[1], 2);
    }
}

/**
 * finds the closest cardinal (N, S, E, W) angle to the given angle
 * @params {number} angle
 * @returns {number}
 */
function closestAngle(angle)
{
    var left = differenceAngles(angle, LEFT);
    var right = differenceAngles(angle, RIGHT);
    var up = differenceAngles(angle, UP);
    var down = differenceAngles(angle, DOWN);
    if (left <= right && left <= up && left <= down)
    {
        return LEFT;
    }
    else if (right <= up && right <= down)
    {
        return RIGHT;
    }
    else if (up <= down)
    {
        return UP;
    }
    else
    {
        return DOWN;
    }
}

var Angle = {
    UP: UP,
    DOWN: DOWN,
    LEFT: LEFT,
    RIGHT: RIGHT,
    NORTH: NORTH,
    SOUTH: SOUTH,
    EAST: EAST,
    WEST: WEST,
    PI_2: PI_2,
    toDegrees: toDegrees,
    toRadians: toRadians,
    isAngleBetween: isAngleBetween,
    differenceAnglesSign: differenceAnglesSign,
    differenceAngles: differenceAngles,
    normalize: normalize,
    angleTwoPoints: angleTwoPoints,
    distanceTwoPoints: distanceTwoPoints,
    distanceTwoPointsSquared: distanceTwoPointsSquared,
    closestAngle: closestAngle
};

// Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
if (typeof define === 'function' && define.amd)
{
    define(function()
    {
        return {
            Angle: Angle
        };
    });
}

// Add support for CommonJS libraries such as browserify.
if (typeof exports !== 'undefined')
{
    exports.Angle = Angle;
}

// define globally in case AMD is not available or available but not used
if (typeof window !== 'undefined')
{
    window.Angle = Angle;
}
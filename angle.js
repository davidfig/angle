/*
    angle.js <https://github.com/davidfig/anglejs>
    Released under MIT license <https://github.com/davidfig/anglejs/license>
    Author David Figatner and other contributors
    Copyright YOPEY YOPEY LLC and other contributors
*/

// constants
var UP = Math.PI / 2;
var DOWN = 3 * Math.PI / 2;
var LEFT = Math.PI;
var RIGHT = 0;

var NORTH = UP;
var SOUTH = DOWN;
var WEST = LEFT;
var EAST = RIGHT;

var PI_2 = Math.PI * 2;
var PI_QUARTER = Math.PI / 4;
var PI_HALF = Math.PI / 2;

// converts between degrees and radians; all other functions expect radians

var _toDegreeConversion = 180 / Math.PI;
function toDegrees(radians)
{
    return radians * _toDegreeConversion;
}

var _toRadianConversion = Math.PI / 180;
function toRadians(degrees)
{
    return radians * _toRadianConversion;
}

// returns whether the target angle is between angle1 and angle2 (in radians)
// (based on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles)
function isAngleBetween(target, angle1, angle2)
{
    var rAngle = ((angle2 - angle1) % PI_2 + PI_2) % PI_2;
    if (rAngle >= Math.PI)
    {
        var swap = angle1;
        angle1 = angle2;
        angle2 = swap;
    }

    if (angle1 <= angle2)
    {
        return target >= angle1 && target <= angle2;
    }
    else
    {
        return target >= angle1 || target <= angle2;
    }
}

// returns +1 or -1 based on whether the difference between two angles is positive or negative (in radians)
// EXAMPLE: var actualAngleDelta = differenceAngles(target, source) * differenceAnglesSign(target, source);
function differenceAnglesSign(target, source)
{
    function mod(a, n)
    {
        return (a % n + n) % n;
    }

    var a = target - source;
    return mod((a + Math.PI), PI_2) - Math.PI > 0 ? 1 : -1;
}

// returns the normalized difference between two angles (in radians)
function differenceAngles(a, b)
{
    var c = Math.abs(a - b) % PI_2;
    return c > Math.PI ? (PI_2 - c) : c;
}

// returns the normalized angle (0 - PI x 2) (in radians)
function normalize(radian)
{
    return radians - PI_2 * Math.floor(radians / PI_2);
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

// returns angle between two points (in radians)
// PARAMS: (x1, y1, x2, y2) or (point1, point2) where point = {x: x, y: y}
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

// returns distance between two points
// PARAMS: (x1, y1, x2, y2) or (point1, point2) where point = {x: x, y: y}
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

// returns the squared distance between two points
// PARAMS: (x1, y1, x2, y2) or (point1, point2) where point = {x: x, y: y}
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

// returns the closest cardinal (N, S, E, W) to the given angle (in radians)
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

// exports
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
    PI_HALF: PI_HALF,
    PI_QUARTER: PI_QUARTER,
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

// add support for AMD (Asynchronous Module Definition) libraries such as require.js.
if (typeof define === 'function' && define.amd)
{
    define(function()
    {
        return {
            Angle: Angle
        };
    });
}

// add support for CommonJS libraries such as browserify.
if (typeof exports !== 'undefined')
{
    module.exports = Angle;
}

// define globally in case AMD is not available or available but not used
if (typeof window !== 'undefined')
{
    window.Angle = Angle;
}
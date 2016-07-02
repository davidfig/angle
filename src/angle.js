/**
 * @license
 * anglejs.js <https://github.com/davidfig/anglejs>
 * Released under MIT license <https://github.com/davidfig/anglejs/license>
 * Author David Figatner and other contributors
 * Copyright YOPEY YOPEY LLC and other contributors
 */

var Angle = {

    /** @const {number} */
    UP: Math.PI / 2,

    /** @const {number} */
    DOWN: 3 * Math.PI / 2,

    /** @const {number} */
    LEFT: Math.PI,

    /** @const {number} */
    RIGHT: 0,

    /** @const {number} */
    PI_2: Math.PI * 2,

    _toDegreeConversion: 180 / Math.PI,
    _toRadianConversion: Math.PI / 180,

    /**
     * Radian to Degrees
     * @param {number} radian
     * @returns {number} degrees
     */
    toDegrees: function(radians)
    {
        return radians * Angle._toDegreeConversion;
    },

    /**
     * Degrees to Radian
     * @param {number} degrees
     * @returns {number} radian
     */
    toRadian: function(degrees)
    {
        return radians * Angle._toRadianConversion;
    },

    /**
     * Checks whether the target is between angle1 and angle2 (all in radians)
     * baed on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles
     * @param  {number}  target
     * @param  {number}  angle1
     * @param  {number}  angle2
     * @return {Boolean}
     */
    isAngleBetween: function(target, angle1, angle2)
    {
        var rAngle = ((angle2 - angle1) % Angle.PI_2 + Angle.PI_2) % Angle.PI_2;
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
    },

    /**
     * determines whether the difference between twoangles is positive or negative (all in radians)
     * @param  {number} target angle
     * @param  {number} source angle
     * @return {number}
     */
    differenceAnglesSign: function(target, source)
    {
        function mod(a, n)
        {
            return (a % n + n) % n;
        }

        var a = target - source;
        return mod((a + PI), PIx2) - PI > 0 ? 1 : -1;
    },

    /**
     * determines the normalized difference between two angles (radians)
     * @param {number} a in radians
     * @param {number} b in radians
     */
    differenceAngles: function(a, b)
    {
        var c = Math.abs(a - b) % PIx2;
        return c > PI ? (PIx2 - c) : c;
    },

    /**
     * normalizes angle between 0 - PIx2 (radians)
     * @param  {number} radians
     * @return {number}
     */
    normalize: function(radian)
    {
        return radians - PIx2 * Math.floor(radians / PIx2);
    },

    /**
     * finds angle between two points (radians)
     * also accepts 2 point objects {x: x, y: y}
     * @param  {number} x1
     * @param  {number} y1
     * @param  {number} x2
     * @param  {number} y2
     * @return {number} radian
     */
    angleTwoPoints: function()
    {
        if (arguments.length === 4)
        {
            return Math.atan2(arguments[3] - arguments[1], arguments[2] - arguments[0]);
        }
        else
        {
            return Math.atan2(arguments[1].y - arguments[0].y, arguments[1].x - arguments[0].x);
        }
    },

    /**
     * finds distance between two points
     * also accepts 2 point objects {x: x, y: y}
     * @param  {number} x1
     * @param  {number} y1
     * @param  {number} x2
     * @param  {number} y2
     * @return {number} radian
     */
    distanceTwoPoints: function()
    {
        if (arguments.length === 2)
        {
            return Math.sqrt(Math.pow(arguments[1].x - arguments[0].x, 2) + Math.pow(arguments[1].y - arguments[0].y, 2));
        }
        else
        {
            return Math.sqrt(Math.pow(arguments[2] - arguments[0], 2) + Math.pow(arguments[3] - arguments[1], 2));
        }
    },

    /**
     * finds the square distance between two points
     * also accepts 2 point objects {x: x, y: y}
     * @param  {number} x1
     * @param  {number} y1
     * @param  {number} x2
     * @param  {number} y2
     * @return {number} radian
     */
    distanceTwoPointsSquared: function()
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
};

exports.Angle = Angle;
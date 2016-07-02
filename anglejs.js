/**
 * @license
 * anglejs.js <https://github.com/davidfig/anglejs>
 * Released under MIT license <https://github.com/davidfig/anglejs/license>
 * Author David Figatner and other contributors
 * Copyright YOPEY YOPEY LLC and other contributors
 */

(function() {
    'use strict'

    AngleJS = {};

    AngleJS.PI = Math.PI;
    AngleJS.PIx2 = Math.PI * 2;
    AngleJS.PIhalf = Math.PI / 2;
    AngleJS.PI3half = 3 * Math.PI / 2;

    AngleJS._toDegreeConversion = 180 / Math.PI;
    AngleJS._toRadianConversion = Math.PI / 180;

    /**
     * Radian to Degrees
     * @param {number} radian
     * @returns {number} degrees
     */
    AngleJS.toDegrees = function(radians)
    {
        return radians * _toDegreeConversion;
    }

    /**
     * Degrees to Radian
     * @param {number} degrees
     * @returns {number} radian
     */
    AngleJS.toRadian = function(degrees)
    {
        return radians * _toRadianConversion;
    }

	/**
	 * Checks whether the target is between angle1 and angle2 (all in radians)
	 * baed on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles
	 * @param  {number}  target
	 * @param  {number}  angle1
	 * @param  {number}  angle2
	 * @return {Boolean}
	 */
	AngleJS.isAngleBetween = function(target, angle1, angle2)
    {
		var rAngle = ((angle2 - angle1) % PIx2 + PIx2) % PIx2;
	  	if (rAngle >= PI)
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
	 * @return {1|-1}
	 */
	AngleJS.differenceAnglesSign = function(target, source)
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
    AngleJS.differenceAngles = function(a, b)
    {
		var c = Math.abs(a - b) % PIx2;
		return c > PI ? (PIx2 - c) : c;
	}

	/**
	 * normalizes angle between 0 - PIx2 (radians)
	 * @param  {number} radians
	 * @return {number}
	 */
    AngleJS.normalize = function(radian)
    {
		return radians - PIx2 * Math.floor(radians / PIx2);
	}

	/**
	 * finds angle between two points (radians)
	 * @param  {number} x1
	 * @param  {number} y1
	 * @param  {number} x2
	 * @param  {number} y2
     *
     * or
     *
     * @param  {{x, y}} p1
     * @param  {{x, y}} p2
	 * @return {number} radian
	 */
	AngleJS.angleTwoPoints = function()
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
	 * @param  {number} x1
	 * @param  {number} y1
	 * @param  {number} x2
	 * @param  {number} y2
     *
     * or
     *
     * @param  {{x, y}} p1
     * @param  {{x, y}} p2
	 * @return {number} radian
	 */
    AngleJS.distanceTwoPoints = function()
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
	 * @param  {number} x1
	 * @param  {number} y1
	 * @param  {number} x2
	 * @param  {number} y2
     *
     * or
     *
     * @param  {{x, y}} p1
     * @param  {{x, y}} p2
	 * @return {number} radian
	 */
	AngleJS.distanceTwoPointsSquared = function()
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
     * Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
     */
    if (typeof define === 'function' && define.amd)
    {
        define(function()
        {
            return {
                AngleJS: AngleJS,
            };
        });
    }

    /**
     * Add support for CommonJS libraries such as browserify.
     */
    if (typeof exports !== 'undefined')
    {
        exports.AngleJS = AngleJS;
    }

    // define globally in case AMD is not available or available but not used
    if (typeof window !== 'undefined')
    {
        window.AngleJS = AngleJS;
    }

})();
/*
    angle.js <https://github.com/davidfig/anglejs>
    Released under MIT license <https://github.com/davidfig/angle/blob/master/LICENSE>
    Author: David Figatner
    Copyright (c) 2016 YOPEY YOPEY LLC
*/

/** @class */
class Angle
{
    constructor()
    {
        // constants
        this.UP = Math.PI / 2;
        this.DOWN = 3 * Math.PI / 2;
        this.LEFT = Math.PI;
        this.RIGHT = 0;

        this.NORTH = this.UP;
        this.SOUTH = this.DOWN;
        this.WEST = this.LEFT;
        this.EAST = this.RIGHT;

        this.PI_2 = Math.PI * 2;
        this.PI_QUARTER = Math.PI / 4;
        this.PI_HALF = Math.PI / 2;

        this._toDegreeConversion = 180 / Math.PI;
        this._toRadianConversion = Math.PI / 180;
    }

    /**
     * converts from radians to degrees (all other functions expect radians)
     * @param {number} radians
     * @return {number} degrees
     */
    toDegrees(radians)
    {
        return radians * this._toDegreeConversion;
    }

    /**
     * converts from degrees to radians (all other functions expect radians)
     * @param {number} degrees
     * @return {number} radians
     */
    toRadians(degrees)
    {
        return degrees * this._toRadianConversion;
    }

    /**
     * returns whether the target angle is between angle1 and angle2 (in radians)
     * (based on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles)
     * @param {number} target angle
     * @param {number} angle1
     * @param {number} angle2
     * @return {boolean}
     */
    isAngleBetween(target, angle1, angle2)
    {
        const rAngle = ((angle2 - angle1) % this.PI_2 + this.PI_2) % this.PI_2;
        if (rAngle >= Math.PI)
        {
            const swap = angle1;
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

    /**
     * returns +1 or -1 based on whether the difference between two angles is positive or negative (in radians)
     * @param {number} target angle
     * @param {number} source angle
     * @return {number} 1 or -1
     */
    differenceAnglesSign(target, source)
    {
        function mod(a, n)
        {
            return (a % n + n) % n;
        }

        const a = target - source;
        return mod((a + Math.PI), this.PI_2) - Math.PI > 0 ? 1 : -1;
    }

    /**
     * returns the normalized difference between two angles (in radians)
     * @param {number} a - first angle
     * @param {number} b - second angle
     * @return {number} normalized difference between a and b
     */
    differenceAngles(a, b)
    {
        const c = Math.abs(a - b) % this.PI_2;
        return c > Math.PI ? (this.PI_2 - c) : c;
    }

    /**
     * returns a target angle that is the shortest way to rotate an object between start and to--may choose a negative angle
     * @param {number} start
     * @param {number} to
     * @return {number} shortest target angle
     */
    shortestAngle(start, to)
    {
        const difference = this.differenceAngles(to, start);
        const sign = this.differenceAnglesSign(to, start);
        const delta = difference * sign;
        return delta + start;
    }

    /**
     * returns the normalized angle (0 - PI x 2)
     * @param {number} radians
     * @return {number} normalized angle in radians
     */
    normalize(radians)
    {
        return radians - this.PI_2 * Math.floor(radians / this.PI_2);
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
    angleTwoPoints(/* (point1, point2) OR (x1, y1, x2, y2) */)
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
     * returns distance between two points
     * @param {Point} [point1] {x: x, y: y}
     * @param {Point} [point2] {x: x, y: y}
     * @param {number} [x1]
     * @param {number} [y1]
     * @param {number} [x2]
     * @param {number} [y2]
     * @return {number} distance
     */
    distanceTwoPoints(/* (point1, point2) OR (x1, y1, x2, y2) */)
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
     * returns the squared distance between two points
     * @param {Point} [point1] {x: x, y: y}
     * @param {Point} [point2] {x: x, y: y}
     * @param {number} [x1]
     * @param {number} [y1]
     * @param {number} [x2]
     * @param {number} [y2]
     * @return {number} squared distance
     */
    distanceTwoPointsSquared(/* (point1, point2) OR (x1, y1, x2, y2) */)
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
     * returns the closest cardinal (N, S, E, W) to the given angle (in radians)
     * @param {number} angle
     * @return {number} closest cardinal in radians
     */
    closestAngle(angle)
    {
        var left = this.differenceAngles(angle, this.LEFT);
        var right = this.differenceAngles(angle, this.RIGHT);
        var up = this.differenceAngles(angle, this.UP);
        var down = this.differenceAngles(angle, this.DOWN);
        if (left <= right && left <= up && left <= down)
        {
            return this.LEFT;
        }
        else if (right <= up && right <= down)
        {
            return this.RIGHT;
        }
        else if (up <= down)
        {
            return this.UP;
        }
        else
        {
            return this.DOWN;
        }
    }

    /**
     * checks whether angles a1 and a2 are equal (after normalizing)
     * @param {number} a1
     * @param {number} a2
     * @param {boolean} a1 === a2
     *  */
    equals(a1, a2)
    {
        return this.normalize(a1) === this.normalize(a2);
    }
}

module.exports = new Angle();
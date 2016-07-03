# angle.js
Library for calculating angles in javascript

__Constants (in radians)__
Angle.UP
Angle.DOWN
Angle.LEFT
Angle.RIGHT
Angle.NORTH
Angle.SOUTH
Angle.EAST
Angle.WEST
Angle.PI_2 (PI x 2)

__Static Functions__

// finds angle between two points (radians) also accepts 2 point objects {x: x, y: y}
Angle.angleTwoPoints(x1, y1, x2, y2)

// determines the normalized difference between two angles (radians)
Angle.differenceAngles(a, b)

// determines whether the difference between twoangles is positive or negative (all in radians)
Angle.differenceAnglesSign(target, source)

// finds distance between two points also accepts 2 point objects {x: x, y: y}
Angle.distanceTwoPoints(x1, y1, x2, y2)

// finds the square distance between two points also accepts 2 point objects {x: x, y: y}
Angle.distanceTwoPointsSquared(x1, y1, x2, y2)

// Checks whether the target is between angle1 and angle2 (all in radians)
Angle.isAngleBetween(target, angle1, angle2)

// normalizes angle between 0 - PIx2 (radians)
Angle.normalize(radians, radian)

// Radian to Degrees
Angle.toDegrees(radian, radians)

// Degrees to Radian
Angle.toRadian(degrees)

// finds the closest cardinal (N, S, E, W) angle to the given angle
Angle.closestAngle(angle)
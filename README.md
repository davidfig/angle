## angle.js
simple library for calculating angles in javascript

## Installation
include angle.js in your project or add to your workflow

    <script src="update.js"></script>

## API Reference

#### Constants (radians)

Angle.UP
Angle.DOWN
Angle.LEFT
Angle.RIGHT

Angle.NORTH
Angle.SOUTH
Angle.EAST
Angle.WEST

Angle.PI_2 (PI x 2)

#### Angle.angleTwoPoints(x1, y1, x2, y2)
finds angle between two points (radians)
* alternatively accepts (p1, p2) where p are point objects {x: x, y: y}

#### Angle.differenceAngles(a, b)
determines the normalized difference between two angles (radians)

#### Angle.differenceAnglesSign(target, source)
determines whether the difference between twoangles is positive or negative (radians)

#### Angle.distanceTwoPoints(x1, y1, x2, y2)
finds distance between two points
* alternatively accepts (p1, p2) where p are point objects {x: x, y: y}

Angle.distanceTwoPointsSquared(x1, y1, x2, y2)
finds the square distance between two points
* alternatively accepts (p1, p2) where p are point objects {x: x, y: y}

#### Angle.isAngleBetween(target, angle1, angle2)
Checks whether the target is between angle1 and angle2 (radians)

#### Angle.normalize(radians, radian)
normalizes angle [0 - PI x 2) (radians)

#### Angle.toDegrees(radian, radians)
radian to degrees

#### Angle.toRadian(degrees)
degrees to Radian

#### Angle.closestAngle(angle)
finds the closest cardinal (N, S, E, W) to the given angle
* returns the radian angle

## License
MIT License (MIT)
## angle.js
simple library for calculating angles in javascript

## Installation
include angle.js in your project or add to your workflow

    npm install yy-angle

# API Reference
**Kind**: global class  

* [Angle](#Angle)
    * [.toDegrees(radians)](#Angle+toDegrees) ⇒ <code>number</code>
    * [.toRadians(degrees)](#Angle+toRadians) ⇒ <code>number</code>
    * [.isAngleBetween(target, angle1, angle2)](#Angle+isAngleBetween) ⇒ <code>boolean</code>
    * [.differenceAnglesSign(target, source)](#Angle+differenceAnglesSign) ⇒ <code>number</code>
    * [.differenceAngles(a, b)](#Angle+differenceAngles) ⇒ <code>number</code>
    * [.shortestAngle(start, to)](#Angle+shortestAngle) ⇒ <code>number</code>
    * [.normalize(radians)](#Angle+normalize) ⇒ <code>number</code>
    * [.angleTwoPoints([point1], [point2], [x1], [y1], [x2], [y2])](#Angle+angleTwoPoints) ⇒ <code>number</code>
    * [.distanceTwoPoints([point1], [point2], [x1], [y1], [x2], [y2])](#Angle+distanceTwoPoints) ⇒ <code>number</code>
    * [.distanceTwoPointsSquared([point1], [point2], [x1], [y1], [x2], [y2])](#Angle+distanceTwoPointsSquared) ⇒ <code>number</code>
    * [.closestAngle(angle)](#Angle+closestAngle) ⇒ <code>number</code>
    * [.equals(a1, a2, a1)](#Angle+equals)

<a name="Angle+toDegrees"></a>

### angle.toDegrees(radians) ⇒ <code>number</code>
converts from radians to degrees (all other functions expect radians)

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - degrees  

| Param | Type |
| --- | --- |
| radians | <code>number</code> | 

<a name="Angle+toRadians"></a>

### angle.toRadians(degrees) ⇒ <code>number</code>
converts from degrees to radians (all other functions expect radians)

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - radians  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

<a name="Angle+isAngleBetween"></a>

### angle.isAngleBetween(target, angle1, angle2) ⇒ <code>boolean</code>
returns whether the target angle is between angle1 and angle2 (in radians)
(based on: http://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles)

**Kind**: instance method of <code>[Angle](#Angle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | angle |
| angle1 | <code>number</code> |  |
| angle2 | <code>number</code> |  |

<a name="Angle+differenceAnglesSign"></a>

### angle.differenceAnglesSign(target, source) ⇒ <code>number</code>
returns +1 or -1 based on whether the difference between two angles is positive or negative (in radians)

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - 1 or -1  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | angle |
| source | <code>number</code> | angle |

<a name="Angle+differenceAngles"></a>

### angle.differenceAngles(a, b) ⇒ <code>number</code>
returns the normalized difference between two angles (in radians)

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - normalized difference between a and b  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | first angle |
| b | <code>number</code> | second angle |

<a name="Angle+shortestAngle"></a>

### angle.shortestAngle(start, to) ⇒ <code>number</code>
returns a target angle that is the shortest way to rotate an object between start and to--may choose a negative angle

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - shortest target angle  

| Param | Type |
| --- | --- |
| start | <code>number</code> | 
| to | <code>number</code> | 

<a name="Angle+normalize"></a>

### angle.normalize(radians) ⇒ <code>number</code>
returns the normalized angle (0 - PI x 2)

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - normalized angle in radians  

| Param | Type |
| --- | --- |
| radians | <code>number</code> | 

<a name="Angle+angleTwoPoints"></a>

### angle.angleTwoPoints([point1], [point2], [x1], [y1], [x2], [y2]) ⇒ <code>number</code>
returns angle between two points (in radians)

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - angle  

| Param | Type | Description |
| --- | --- | --- |
| [point1] | <code>Point</code> | {x: x, y: y} |
| [point2] | <code>Point</code> | {x: x, y: y} |
| [x1] | <code>number</code> |  |
| [y1] | <code>number</code> |  |
| [x2] | <code>number</code> |  |
| [y2] | <code>number</code> |  |

<a name="Angle+distanceTwoPoints"></a>

### angle.distanceTwoPoints([point1], [point2], [x1], [y1], [x2], [y2]) ⇒ <code>number</code>
returns distance between two points

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - distance  

| Param | Type | Description |
| --- | --- | --- |
| [point1] | <code>Point</code> | {x: x, y: y} |
| [point2] | <code>Point</code> | {x: x, y: y} |
| [x1] | <code>number</code> |  |
| [y1] | <code>number</code> |  |
| [x2] | <code>number</code> |  |
| [y2] | <code>number</code> |  |

<a name="Angle+distanceTwoPointsSquared"></a>

### angle.distanceTwoPointsSquared([point1], [point2], [x1], [y1], [x2], [y2]) ⇒ <code>number</code>
returns the squared distance between two points

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - squared distance  

| Param | Type | Description |
| --- | --- | --- |
| [point1] | <code>Point</code> | {x: x, y: y} |
| [point2] | <code>Point</code> | {x: x, y: y} |
| [x1] | <code>number</code> |  |
| [y1] | <code>number</code> |  |
| [x2] | <code>number</code> |  |
| [y2] | <code>number</code> |  |

<a name="Angle+closestAngle"></a>

### angle.closestAngle(angle) ⇒ <code>number</code>
returns the closest cardinal (N, S, E, W) to the given angle (in radians)

**Kind**: instance method of <code>[Angle](#Angle)</code>  
**Returns**: <code>number</code> - closest cardinal in radians  

| Param | Type |
| --- | --- |
| angle | <code>number</code> | 

<a name="Angle+equals"></a>

### angle.equals(a1, a2, a1)
checks whether angles a1 and a2 are equal (after normalizing)

**Kind**: instance method of <code>[Angle](#Angle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| a1 | <code>number</code> |  |
| a2 | <code>number</code> |  |
| a1 | <code>boolean</code> | === a2 |


* * *

Copyright (c) 2016 YOPEY YOPEY LLC - MIT License - Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)
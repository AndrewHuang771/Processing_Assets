# Processing_Assets

Assets for processing pixelart

## To Do:

-Add depth system


# Features

## Controlling Framerate:

WEBGL has a base framerate of 60 fps. To change the framerate, change FRAMERATE to a different value, preferably where FRAMERATE = 60 / n where n is > 0

# Important Structures

## Vector

A Vector is an object with an n-sized array representing the components of the vector. It supports typical vector operations such as addition, scalar multiplication, dot product, and more. Vectors are used to represent forces, position, velocity, acceleration, and more.

## Body

A Body is an object that renders on the screen that can be affected by physics, accelerated via forces such as gravity or wind. The appearance of a Body is specified by its Template.

## Template

A Template is an object with a 2-D array representing the look of a Body, with each cell containing the corresponding color the body should be.
example of proper formatting for a template:

[
    [[1, 1, 1, 0.1], [0, 0, 0, 0], [1, 0.1, 1, 1], [1, 0.1, 1, 1]],
    [[0.1, 1, 1, 1], [1, 1, 0.1, 1]],
    [[1, 1, 1, 1]]
]


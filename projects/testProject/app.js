let UPDATEDELAY = 1;
let MAXPROBABILITY = 0.99;
let FRAMERATE = 60;
let canvasInstances = [];

var vertexShaderText = `
  precision mediump float;

  attribute vec2 vertPosition;
  attribute vec4 vertColor;
  varying vec4 fragColor;

  void main()
  {
    fragColor = vertColor;
    gl_Position = vec4(vertPosition, 0.0, 1.0);
  }
`;

var fragmentShaderText = `
  precision mediump float;

  varying vec4 fragColor;
  void main()
  {
    gl_FragColor = vec4(fragColor);
  }
`;

var InitCanvas = function (canvasId) {
  var canvas = document.getElementById(canvasId);
  canvas.width = document.body.clientWidth; //document.width is obsolete
  canvas.height = document.body.clientHeight; //document.height is obsolete

  let canvasWidth = canvas.width;
  let canvasHeight = canvas.height;

  var gl = canvas.getContext("webgl");

  if (!gl) {
    console.log("WebGL not supported, falling back on experimental-webgl");
    gl = canvas.getContext("experimental-webgl");
  }

  if (!gl) {
    alert("Your browser does not support WebGL");
  }

  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  //
  // Create shaders
  //
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(vertexShader, vertexShaderText);
  gl.shaderSource(fragmentShader, fragmentShaderText);

  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error(
      "ERROR compiling vertex shader!",
      gl.getShaderInfoLog(vertexShader)
    );
    return;
  }

  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error(
      "ERROR compiling fragment shader!",
      gl.getShaderInfoLog(fragmentShader)
    );
    return;
  }

  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("ERROR linking program!", gl.getProgramInfoLog(program));
    return;
  }
  gl.validateProgram(program);
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
    console.error("ERROR validating program!", gl.getProgramInfoLog(program));
    return;
  }

  //
  // Create buffer
  //

  let numItems = 0;
  let triangleVertices = [];

  var triangleVertexBufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(triangleVertices),
    gl.STATIC_DRAW
  );

  var positionAttribLocation = gl.getAttribLocation(program, "vertPosition");
  var colorAttribLocation = gl.getAttribLocation(program, "vertColor");
  gl.vertexAttribPointer(
    positionAttribLocation, // Attribute location
    2, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    6 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
    0 // Offset from the beginning of a single vertex to this attribute
  );
  gl.vertexAttribPointer(
    colorAttribLocation, // Attribute location
    4, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    6 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
    2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
  );

  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  //
  // Main render loop, edit below this
  //

  gl.useProgram(program);

  let bodies = [];

  for (let i = 0; i < 1; i++) {
    createBodies(bodies, { canvasWidth, canvasHeight });
  }

  let mainLoop = function () {
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    triangleVertices = [];

    // Do all drawing in this section
    for (let i = 0; i < bodies.length; i++) {
      bodies[i].update({ canvasWidth, canvasHeight });
      bodies[i].render(triangleVertices, { canvasWidth, canvasHeight });
    }

    // Don't change anything below this
    numItems = triangleVertices.length / 6;

    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(triangleVertices),
      gl.STATIC_DRAW
    );

    gl.drawArrays(gl.TRIANGLES, 0, numItems);
    requestAnimationFrame(mainLoop);
  };
  requestAnimationFrame(mainLoop);
  canvasInstances.push({ gl, mainLoop });
};

function createBodies(bodies, canvasDim) {
  let { canvasHeight, canvasWidth } = canvasDim;
  let config = {
    initialPosition: new Vector([
      Math.random() * canvasWidth - canvasWidth / 2,
      Math.random() * canvasHeight - canvasHeight / 2,
    ]),
    initialVelocity: new Vector([0, 0]),
    pixelSize: {
      height: 15,
      width: 15,
    },
    // template: (body) => {
    //   return new Template(make2DLineTemplate(new Vector([1, 1]), [1, 1, 1, 1]));
    // },
    forces: [new Vector([0, -1])],
    mass: 10,
    probability: 0.9,
    direction: new Vector([0, -1]),
    coordsSpawn: [
      (-1 * canvasWidth) / 2,
      canvasHeight / 2,
      canvasWidth / 2,
      canvasHeight / 2 - 1,
    ],
  };
  var body = new Rain(config);
  bodies.push(body);
}

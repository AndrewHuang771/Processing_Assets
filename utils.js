// Color is a 4-element array containing RGBA values.
function drawRect(
  positionVector,
  pixelSize,
  color,
  triangleVertices,
  canvasDim
) {
  let { canvasWidth, canvasHeight } = canvasDim;
  // Top left corner of the rectangle
  let position = positionVector.getComponents();
  position[0] *= 2 / canvasWidth;
  position[1] *= 2 / canvasHeight;
  let topRightCorner = [...position];
  topRightCorner[0] += pixelSize.width / canvasWidth;
  let bottomRightCorner = [...topRightCorner];
  bottomRightCorner[1] -= pixelSize.height / canvasHeight;
  let bottomLeftCorner = [...position];
  bottomLeftCorner[1] -= pixelSize.height / canvasHeight;

  triangleVertices.push(
    ...bottomLeftCorner,
    ...color,
    ...bottomRightCorner,
    ...color,
    ...topRightCorner,
    ...color,
    ...bottomLeftCorner,
    ...color,
    ...topRightCorner,
    ...color,
    ...position,
    ...color
  );
}

// Creates a rectangular template size height x width of transparent colors
function createEmptyTemplate(height, width) {
  let template = [];
  for (let i = 0; i < height; i++) {
    template[i] = [];
    for (let j = 0; j < width; j++) {
      let element = [0, 0, 0, 0];
      template[i].push(element);
    }
  }
  return template;
}

// Returns true if obj is a function
function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

// Bresenham algorithm with vector input
function make2DLineTemplate(vector, color) {
  let vectorComponents = vector.getComponents();
  for (let i = 0; i < vectorComponents.length; i++) {
    vectorComponents[i] = Math.floor(vectorComponents[i]);
  }
  if (vectorComponents[0] < 0 || vectorComponents[1] < 0) {
    vectorComponents[0] *= -1;
    vectorComponents[1] *= -1;
  }

  let template = createEmptyTemplate(
    Math.abs(vectorComponents[0]),
    Math.abs(vectorComponents[1])
  );

  if (vector.getComponents().length !== 2) {
    console.error("2D line requires a 2D vector");
    return undefined;
  }
  let x0 = 0;
  let y0 = 0;
  let x1 = vectorComponents[0];
  let y1 = vectorComponents[1];
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    if (vectorComponents[0] < 0 && vectorComponents[1] >= 0) {
      template[x0 * -1][y0] = color;
    } else if (vectorComponents[0] >= 0 && vectorComponents[1] < 0) {
      template[x0][y0 * -1] = color;
    } else {
      template[x0][y0] = color;
    }

    if (x0 === x1 && y0 === y1) break;
    let e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
  return template;
}

function drawFPS(p) {
  // Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
  let fps = p.frameRate();
  if (fps >= 60) {
    p.fill(p.color(0, 255, 0));
  } else {
    p.fill(255);
  }
  p.stroke(0);
  p.text("FPS: " + fps.toFixed(2), 10, p.height - 10);
}

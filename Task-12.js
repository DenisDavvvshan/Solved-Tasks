// Абстракция (набор функций) для работы с прямоугольниками, стороны которого 
// всегда параллельны осям. Прямоугольник может располагаться 
// в любом месте координатной плоскости.

const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );

  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

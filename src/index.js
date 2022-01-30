
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let towel = [];

  for (let line = 0; line < matrix.length; line++) {
    line % 2 === 0
      ? towel.push(...matrix[line])
      : towel.push(...matrix[line].reverse());
  }
  return towel;
}
module.exports = function countCats(matrix) {
  if (matrix.length > 0) {
    return matrix.reduce((acc, value) => acc.concat(value)).filter(el => el === '^^').length;
  } else {
    return [];
  }
};


// Функция sequenceSum(), которая находит сумму последовательности целых чисел.

const sequenceSum = (begin, end) => {
    if (begin > end) {
      return NaN
    } else if (begin === end) {
      return begin
    } else if (begin == 0 && end == 0) {
      return 0
    } 
    return begin + sequenceSum(begin + 1, end);
  };
// Функция принимает на вход массив и выпрямляет его: если 
// элементами массива являются массивы, то flatten сводит 
// всё к одному массиву, раскрывая один уровень вложенности.

const flatten = (arr) => {
    let result = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        result.push(...item)
      } else {
        result.push(item)
      }
    }
    return result;
  };
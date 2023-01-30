// Функция для группировки объектов по заданному свойству.

const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
  ];

const groupBy = (students, value) => {
    const result = {};
    for (const item of students) {
      //   console.log(item)
      const test = item[value];
      if (!result.hasOwnProperty(test)) {
        result[test] = [item];
      } else {
        result[test].push(item)
      }
    }
    return result
  };
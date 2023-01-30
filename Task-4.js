// Функция, которая заполняет объект данными из 
// другого объекта по разрешенному списку ключей.

import _ from 'lodash';

const fill = (company, keys, data) => {
    let result = {};
    let current = _.pick(data, keys);
    if (keys.length === 0) {
      result = Object.assign(company, data);
    };
    for (const key of keys) {
      result = Object.assign(company, current);
    }
    return result;
  };
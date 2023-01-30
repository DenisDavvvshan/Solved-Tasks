// Функция, которая создает объект компании и возвращает его.

const make = (companyName, obj) => {
    let defaultR = { state: 'moderating', createdAt: Date.now() };
    defaultR.name = companyName;
    const result = { ...defaultR, ...obj };
    return result;
  };
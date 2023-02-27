// Функция, которая принимает на вход директорию (объект-дерево), 
// приводит имена всех файлов в этой и во всех вложенных 
// директориях к нижнему регистру.
const downcaseFileNames = (node) => {
  const name = getName(node);
  const newMeta = _.cloneDeep(getMeta(node));
  const newName = name.toLowerCase();
  if (isFile(node)) {
    return mkfile(newName, newMeta)
  }
  const children = getChildren(node);
  const newChildren = children.map((child) => downcaseFileNames(child));
  const newNode = mkdir(name, newChildren, newMeta);
  return newNode;
};

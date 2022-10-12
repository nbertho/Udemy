const getNextElementInList = (list, value) => {
  let currentActionIndex = list.indexOf(value);
  let nextActionIndex = (currentActionIndex + 1) % list.length;
  return list[nextActionIndex];
};

export default getNextElementInList;

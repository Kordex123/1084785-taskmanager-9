const getAchivedCount = (tasks) => {
  return tasks.filter((task) => task.isArchive).length;
};

const getAllCount = (tasks) => {
  return tasks.filter((task) => !task.isArchive).length;
};

const getTodayCount = (tasks) => {
  return tasks.filter((task) => isToday(task.dueDate)).length;

};

const isToday = (someDateMillis) => {
  const someDate = new Date(someDateMillis);
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear();
};

const getOverdueCount = (tasks) => {
  return tasks.filter((task) => isOverdue(task.dueDate)).length;
};

const isOverdue = (someDateMillis) => {
  return someDateMillis < Date.now();
};

const getFavoriteCount = (tasks) => {
  return tasks.filter((task) => task.isFavorite).length;
};

const getRepeatingCount = (tasks) => {
  return tasks.filter((task) => Object.values(task.repeatingDays).some(Boolean)).length;
};

const getTagsCount = (tasks) => {
  return tasks.filter((task) => task.tags.length > 0).length;
};

export const filters = [
  {title: `All`, count: getAllCount, isChecked: true},
  {title: `Overdue`, count: getOverdueCount, isDisabled: true},
  {title: `Today`, count: getTodayCount, isDisabled: true},
  {title: `Favorites`, count: getFavoriteCount},
  {title: `Repeating`, count: getRepeatingCount},
  {title: `Tags`, count: getTagsCount},
  {title: `Archive`, count: getAchivedCount}
];

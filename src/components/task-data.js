const getRandomTags = (tags) => {
  const MAX_TAGS = 3;
  const numberOfTags = Math.round(Math.random() * MAX_TAGS);
  const result = [];
  while (result.length < numberOfTags) {
    const chosenIndex = Math.floor(Math.random() * tags.size);
    const chosenTag = Array.from(tags)[chosenIndex];
    tags.delete(chosenTag);
    result.push(chosenTag);
  }
  return result;
};

export const COLORS = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`,
];

export const getTask = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + ((-7) + Math.floor(Math.random() * 14)) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    'Mo': false,
    'Tu': false,
    'We': Boolean(Math.round(Math.random())),
    'Th': false,
    'Fr': false,
    'Sa': false,
    'Su': false,
  },
  tags: getRandomTags(new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `sport`,
    `language`,
  ])),
  color: COLORS[Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
  isDeadline: Boolean(Math.round(Math.random())),
  isChecked: Math.round(Math.random())
});

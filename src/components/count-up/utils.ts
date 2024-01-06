export const difficultyMapping = {
  1: {text: 'Easy', color: 'green', bc: '#f5fffd'},
  2: {text: 'Medium', color: 'orange', bc: '#fffef5'},
  3: {text: 'Hard', color: 'red', bc: '#fff5f5'},
};

export const configDifficultyMap = {
  1: {counts: 9, reverse: false, columns: 3, grid: [1, 2, 3, 4, 5, 6, 7, 8, 9]},
  2: {
    counts: 20,
    reverse: false,
    columns: 5,
    grid: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  3: {
    counts: 25,
    reverse: false,
    columns: 5,
    grid: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
  },
};

export const shuffle = (array: Array<number>) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export type CellStatus = "white" | "red" | "green"; 


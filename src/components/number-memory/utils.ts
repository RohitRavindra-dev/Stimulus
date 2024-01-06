import {
  GUESS_TIME,
  IDLE_TIME,
  MEMORIZE_TIME,
} from '../../assets/constants/AppConstants';

export type Modes = 'IDLE' | 'MEMORIZING' | 'GUESS';

export const modesConfig = {
  IDLE: {
    duration: IDLE_TIME,
  },
  MEMORIZING: {
    duration: MEMORIZE_TIME,
  },
  GUESS: {
    duration: GUESS_TIME,
  },
};

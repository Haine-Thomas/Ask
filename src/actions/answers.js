export const SAVE_ANSWERS = 'SAVE_ANSWERS';
export const FETCH_POST_ANSWER = 'FETCH_POST_ANSWER';
export const CHANGE_SORTED = 'CHANGE_SORTED';
export const FETCH_ANSWERS = 'FETCH_ANSWERS';
export const FETCH_ANSWER_SCORE = 'FETCH_ANSWER_SCORE';
export const CHANGE_ANSWER_VALUE = 'CHANGE_ANSWER_VALUE';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const saveAnswers = (questions) => ({
  type: SAVE_ANSWERS,
  questions,
});

export const fetchPostAnswer = () => ({
  type: FETCH_POST_ANSWER,
});

export const changeSorted = (sorted) => ({
  type: CHANGE_SORTED,
  sorted,
});

export const fetchAnswers = () => ({
  type: FETCH_ANSWERS,
});

export const fetchAnswerScore = () => ({
  type: FETCH_ANSWER_SCORE,
});

export const changeAnswerValue = (value) => ({
  type: CHANGE_ANSWER_VALUE,
  value,
});

export const increment = (answer) => ({
  type: INCREMENT_COUNTER,
  answer,
});

export const decrement = (answer) => ({
  type: DECREMENT_COUNTER,
  answer,
});

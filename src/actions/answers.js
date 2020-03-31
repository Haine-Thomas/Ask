export const SAVE_ANSWERS = 'SAVE_ANSWERS';
export const FETCH_POST_ANSWER = 'FETCH_POST_ANSWER';
export const CHANGE_SORT = 'CHANGE_SORT';
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

export const changeSort = (sort) => ({
  type: CHANGE_SORT,
  sort,
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

export const increment = (answerId) => ({
  type: INCREMENT_COUNTER,
  answerId,
});

export const decrement = (answerId) => ({
  type: DECREMENT_COUNTER,
  answerId,
});

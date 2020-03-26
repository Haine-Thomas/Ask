export const FETCH_ANSWERS = 'FETCH_ANSWERS';
export const SAVE_ANSWERS = 'SAVE_ANSWERS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const FETCH_POST_ANSWER = 'FETCH_POST_ANSWER';
export const CHANGE_SORTED = 'CHANGE_SORTED';

export const fetchAnswers = () => ({
  type: FETCH_ANSWERS,
});

export const saveAnswers = (questions) => ({
  type: SAVE_ANSWERS,
  questions,
});

export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const fetchPostAnswer = () => ({
  type: FETCH_POST_ANSWER,
});

export const changeSorted = (sorted) => ({
  type: CHANGE_SORTED,
  sorted,
});

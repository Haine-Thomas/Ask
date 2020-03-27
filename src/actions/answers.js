export const SAVE_ANSWERS = 'SAVE_ANSWERS';
export const FETCH_POST_ANSWER = 'FETCH_POST_ANSWER';
export const CHANGE_SORTED = 'CHANGE_SORTED';

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

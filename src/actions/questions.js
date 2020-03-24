export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const FETCH_POST_QUESTION = 'FETCH_POST_QUESTION';

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});

export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions,
});

export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const fetchPostQuestion = () => ({
  type: FETCH_POST_QUESTION,
});

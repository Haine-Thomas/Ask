export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});

export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions,
});

export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const SEARCH_QUESTION = 'SEARCH_QUESTION';

export const changeSearchValue = (searchValue) => ({
  type: CHANGE_SEARCH_VALUE,
  searchValue,
});

export const searchQuestion = (value) => ({
  type: SEARCH_QUESTION,
  value,
});

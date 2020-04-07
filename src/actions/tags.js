export const FETCH_TAGS = 'FETCH_TAGS';
export const SAVE_TAGS = 'SAVE_TAGS';

export const fetchTags = () => ({
  type: FETCH_TAGS,
});

export const saveTags = (tags) => ({
  type: SAVE_TAGS,
  tags,
});

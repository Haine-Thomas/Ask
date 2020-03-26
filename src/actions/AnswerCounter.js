export const INCREMENT_ANSWERCOUNTER = 'INCREMENT_ANSWERCOUNTER';
export const DECREMENT_ANSWERCOUNTER = 'DECREMENT_ANSWERCOUNTER';

export const increment = () => ({
  type: INCREMENT_ANSWERCOUNTER,
});

export const decrement = () => ({
  type: DECREMENT_ANSWERCOUNTER,
});

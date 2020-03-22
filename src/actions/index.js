export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const addToAlert = (data, id) => {
  return {
    type: 'ADD_TO_ALERT',
    payload: { ...data, id },
  };
};

export const removeFromAlert = (id) => {
  return {
    type: 'REMOVE_TO_ALERT',
    payload: id,
  };
};

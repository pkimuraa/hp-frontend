export const checkEmptyObjects = (object: {}) => {
  return Object.values(object).every((value) => !!value);
};

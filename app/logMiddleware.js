const log = store => next => (action) => {
  console.log(19, store.getState());
  const newAction = { ...action };
  if (action.type === 'ADD') {
    newAction.text = action.text.toUpperCase();
  }
  const result = next(newAction);
  console.log(22, store.getState());
  return result;
};

export default log;

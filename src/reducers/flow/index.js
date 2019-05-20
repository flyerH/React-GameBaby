const flow = (state = 0, action) => {
  if (action.type === 'SET_FLOW') {
    return action.step;
  }
  return state;
};
export default flow;

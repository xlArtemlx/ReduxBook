export default ({dispatch, getState}) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState)
  } else {
    next(action)
  }
}

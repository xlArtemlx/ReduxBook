export default store => next => action => {
  console.group(action.type)
  console.log("Prev state: ", store.getState())
  console.log("dispatching: ", action.type)

  let result = next(action)

  console.log("nextState state: ", store.getState().entities)
  console.groupEnd()
  return result
}

export default function createStore(state, stateChanger) {
  const getState = () => state
  const dispatch = (action) => stateChanger(action, state)
  return {
    getState,
    dispatch
  }
}

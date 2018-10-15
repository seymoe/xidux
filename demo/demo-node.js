var xidux = require('../dist/index.js')

// test
const state = {
  a: 1
}

function stateChanger (action, state) {
  switch (action.type) {
    case 'CHANGE_A':
      state.a = action.data.a
      break
    default:
      break
  }
}

const store = xidux.createStore(state, stateChanger)
console.log('状态变更前 ', store.getState())

store.dispatch({
  type: 'CHANGE_A',
  data: {
    a: 2
  }
})

console.log('状态变更后 ', store.getState())

var xidux = require('../dist/index.js')

// test
const state = {
  title: 'xidux text',
  userInfo: {
    nickname: 'ximolang',
    age: 24
  }
}

function reducer (action, state) {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.title
      }
    case 'CHANGE_AGE':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          age: action.age
        }
      }
    default:
      return state
  }
}

const store = xidux.createStore(reducer, state)

store.subscribe(() => {
  console.log('变更数据 ------')
})

console.log('状态变更前 ', store.getState())

store.dispatch({
  type: 'CHANGE_TITLE',
  title: 'Hi, xidux'
})

console.log('状态变更后 ', store.getState())

store.dispatch({
  type: 'CHANGE_AGE',
  age: 23
})

console.log('状态变更后, age为 ', store.getState().userInfo.age)


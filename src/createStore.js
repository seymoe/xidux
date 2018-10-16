import isPlainObject from './utils/isPlainObject'

export default function createStore(reducer, preloadState) {
  // 订阅者列表
  const listeners = []
  let currentState = preloadState
  // 获取当前的state
  const getState = () => currentState

  // 添加订阅函数
  const subscribe = (listener) => {
    if (typeof listener !== 'function') {
      throw new Error('listener should be a function.')
    }
    let isSubscribe = true
    listeners.push(listener)

    return function unsubscribe() {
      if (!isSubscribe) return false

      isSubscribe = false
      let index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  // 触发state改变
  const dispatch = (action) => {
    if (!isPlainObject(action)) {
      throw new Error('action should be a plain object.')
    }
    if (action.type === undefined) {
      throw new Error('`action.type` is required')
    }
    currentState = reducer(action, currentState)
    console.log('dispath -> ', currentState)
    // 更新state，便执行订阅的函数
    if (listeners.length > 0) {
      listeners.forEach(listener => {
        listener()
      })
    }
    
    return action
  }

  // 初始化store
  dispatch({
    type: '@@xidux/INIT_STORE'
  })

  return {
    getState,
    dispatch,
    subscribe
  }
}

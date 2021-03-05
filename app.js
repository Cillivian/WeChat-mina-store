import store from './utils/store/index'
import state from './utils/store/state'
/**
 * 引入createApp
 */
App(store.createApp({
  globalData: {
    ...state
  }
}))
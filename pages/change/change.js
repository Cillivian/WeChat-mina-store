import store from '../../utils/store/index'
Page(store.createPage({

  /**
   * 页面的初始数据
   */
  data: {

  },
  globalData: ['name'],
  handleChange(e) {
    console.log(e)
    const {value} = e.detail
    store.dispatch('name', value)
  }
}))
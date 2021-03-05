import store from '../../utils/store/index'
const app = getApp()

Page(store.createPage({
  data: {
    sum: 0
  },
  globalData: ['name', 'count'],
  watch: {
    count(count){
      this.setData({
        sum: count *2
      })
    }
  },
  handleToNext() {
    wx.navigateTo({
      url: '/pages/change/change',
    })
  },
  handleChange(e) {
    console.log(e)
    const {value} = e.detail
    const { name } = e.target.dataset
    store.dispatch(name, value);
  }
}))

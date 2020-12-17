// pages/topics/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray:[],
    offset: 0,
    limit: 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData(this.data.offset, this.data.limit)
  },

  /**
   * 请求数据
   */
  requestData: function (offset, limit) {
    var that = this;
    console.log(that.data.maxtime)
    console.log(that.data.dataArray)
    wx.request({
      url: app.globalData.ruby_china_url + 'topics',
      data: { offset: offset,
              limit: limit},
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          // 拼接数组
          dataArray: that.data.dataArray.concat(res.data.topics),
          loadingHidden: true,
          //maxtime: res.data.info.maxtime
        })
      }
    })
  },

 //下拉刷新数据
  onscrolltolower() {
    this.data.offset += 20;
    this.requestData(this.data.offset, this.data.limit)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})
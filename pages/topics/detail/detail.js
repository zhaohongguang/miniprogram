// pages/topics/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: { },
    replies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestTopicDetail(options.id)
    this.requestTopicReplies(options.id)
  },


  /**
   * 请求数据topic详情信息
   */
  requestTopicDetail: function (id) {
    var that = this;
    console.log(that.data.dataArray)
    wx.request({
      url: 'https://ruby-china.org/api/v3/topics/' + id,
      data: { },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          topic: res.data.topic,
          loadingHidden: true,
          //maxtime: res.data.info.maxtime
        })
      }
    })
  },

  requestTopicReplies: function(topic_id) {
    var that = this;
    console.log(that.data.dataArray)
    wx.request({
      url: 'https://ruby-china.org/api/v3/topics/' + topic_id + "/replies",
      data: { },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          replies: res.data.replies,
          loadingHidden: true,
          //maxtime: res.data.info.maxtime
        })
      }
    })
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
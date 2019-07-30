// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  // 历史订单点击事件
  history:function(e){
    wx.navigateTo({
      url: 'history/history',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 个人资料点击事件
  personal_info: function (e) {
    wx.navigateTo({
      url: 'personal_info/personal_info',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})
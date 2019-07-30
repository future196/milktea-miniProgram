// pages/index/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_status: false,
    search_height: "auto",
    search_input: 100,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 点击搜索框
  search: function(e) {
    this.setData({
      search_status: true,
      search_height: "100%",
      search_input: 500,
    });
  },
  //点击取消搜索
  search_cancel: function(e) {
    this.setData({
      search_status: false,
      search_height: "auto",
      search_input: 100,
    });
  }
})
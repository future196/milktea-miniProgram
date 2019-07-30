Page({

  /**
   * 页面的初始数据
   */
  data: {
    classfiySelect: "",
    title_height:'150rpx',
    grey:false,
    bag_detail_show:false,
    bag:{
      number:0,
      price:0,
    },
    detail_show:false,
    produce_detail:{
      title:"",
      info:"",
      price:0,
      img_url:"",
    },
    leftText: [{
      id: "1",
      text1: "喜茶实验室",
    },
    {
      id: "2",
      text1: "芝士茗茶",
    },
    {
      id: "3",
      text1: "当季限定",
    },
    {
      id: "4",
      text1: "喜茶制冰",
    },
    {
      id: "5",
      text1: "苺莓芒芒家族",
    },
    {
      id: "6",
      text1: "满杯水果家族",
    },
    {
      id: "7",
      text1: "波波家族",
    },
      {
        id: "8",
        text1: "热饮推荐",
      },
      {
        id: "9",
        text1: "纯茶",
      },
      {
        id: "10",
        text1: "甜点",
      },
      {
        id: "11",
        text1: "加料",
      },
      {
        id: "12",
        text1: "灵感提示",
      },
  
    ],
    rightData: [{
      id: "1",
      title: "喜茶实验室",
      frist: [{
        url: "../../imgs/tea.png",
        text: "紫薯千层吐司",
        money: 18,
        info:"醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充,醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充",
        status:0,
        number:0,
      },
      {
        url: "../../imgs/tea.png",
        text: "咸蛋黄干层吐司",
        money: 28,
        info: "醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充,醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充",
        status: 1,
        number: 0,
      },
      {
        url: "../../imgs/tea.png",
        text: "莓莓酸奶杯",
        money: 16,
        info: "醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充,醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充",
        status: 1,
        number: 0,
      },
        {
          url: "../../imgs/tea.png",
          text: "芒芒酸奶杯",
          money: 48,
          info: "醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充,醒发够的吐司被甜润紫薯泥填充，醒发够的吐司被甜润紫薯泥填充",
          status: 1,
          number: 0,
        },
      ],
    },
    {
      id: "2",
      title: "芝士茗茶",
      frist: [{
        url: "../../imgs/tea.png",
        text: "绿研",
        money: 36,
        info: "喜茶定制绿茶，较普通绿茶，少了几分，喜茶定制绿茶，较普通绿茶，少了几分，喜茶定制绿茶，较普通绿茶，少了几分",
        status: 1,
        number: 0,
      },
      {
        url: "../../imgs/tea.png",
        text: "金玉",
        money: 18,
        info: "喜茶定制绿茶，较普通绿茶，少了几分，喜茶定制绿茶，较普通绿茶，少了几分，喜茶定制绿茶，较普通绿茶，少了几分",
        status: 1,
        number: 0,
      },
      {
        url: "../../imgs/tea.png",
        text: "金凤茶王",
        money: 16,
        info: "喜茶定制绿茶，较普通绿茶，少了几分，喜茶定制绿茶，较普通绿茶，少了几分，喜茶定制绿茶，较普通绿茶，少了几分",
        status: 1,
        number: 0,
      },
      ],
    },
    {
      id: "3",
      title: "当季限定",
      frist: [{
        url: "../../imgs/tea.png",
        text: "奶茶波波冰",
        money: 15,
        info:"普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
        status: 1,
        number: 0,
      },
      {
        url: "../../imgs/tea.png",
        text: "奶茶波波拼",
        money: 18,
        info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
        status: 1,
        number: 0,
      },
      {
        url: "../../imgs/tea.png",
        text: "mini喜茶",
        money: 28,
        info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
        status: 1,
        number: 0,
      },
      
      ],
    },
      {
        id: "4",
        title: "喜茶制冰",
        frist: [{
          url: "../../imgs/tea.png",
          text: "奶茶波波冰",
          money: 15,
          info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
          status: 1,
          number: 0,
        },
        {
          url: "../../imgs/tea.png",
          text: "奶茶波波拼",
          money: 18,
          info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
          status: 1,
          number: 0,
        },
        {
          url: "../../imgs/tea.png",
          text: "mini喜茶",
          money: 28,
          info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
          status: 1,
          number: 0,
        },

        ],
      },
      {
        id: "5",
        title: "莓莓芒芒家族",
        frist: [{
          url: "../../imgs/tea.png",
          text: "奶茶波波冰",
          money: 15,
          info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
          status: 1,
          number: 0,
          
        },
        {
          url: "../../imgs/tea.png",
          text: "奶茶波波拼",
          money: 18,
          info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
          status: 1,
          number: 0,
        },
        {
          url: "../../imgs/tea.png",
          text: "mini喜茶",
          money: 28,
          info: "普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归，普通奶茶回归",
          status: 1,
          number: 0,
        },

        ],
      },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      classfiySelect: this.data.leftText[0].id
    }),

    // 微信请求code
    wx.login({
      success(res) {
        console.log(res)
        console.log(getApp().globalData.domain_url)
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: getApp().globalData.domain_url + "/api/wechat/getAuthCode",
            data: {
              code: res.code
            },
            success(e){
              console.log(e)
            },
            method:"GET",
            header: {
          'Content-Type': 'application/json'
        },
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

      // wx.request({
      // url: 'https://book.cbjwww.cn/api/index/index?s_id=1',
      //   data: {
          
      //   },
      //   method: 'GET',
      //   header: {
      //     'Content-Type': 'application/json'
      //   },
      //   success: function (res) {
      //     console.log(res.data)
      //   }
      // })
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
  //滚动触发
  scroll: function (e) {
    var scrollTop = e.detail.scrollTop,
      h = 0,
      classfiySelect;
    var that = this;
    that.data.leftText.forEach(function (clssfiy, i) {
      var _h = 26 + that.length(clssfiy['id']) * 102;
      if (scrollTop >= h) {
        classfiySelect = clssfiy['id'];
      }
      h += _h;
      console.log(h);
    })
    that.setData({
      classfiySelect: classfiySelect,
    })
  },
  //求每一栏高度
  length: function (e) {
    var that = this;
    var rightData = that.data.rightData;
    for (var i = 0; i < rightData.length; i++) {
      if (rightData[i]['id'] == e) {
        return rightData[i]['frist'].length;

      }
    }
  },
  //点击左边事件
  left_list: function (e) {
    var that = this;
    var l_id = e.currentTarget.dataset.id;
    that.setData({
      rigId: l_id,
    })
  },
  // 点击更多门店信息事件
  more_info:function(e){
    var height = this.data.title_height;
    if(height == "150rpx"){
      height = "100%";
    }else{
      height = "150rpx";
    }
    this.setData({
      title_height:height,
    });
  },
  // 点击添加事件
  add: function (e) {
    var type_index = e.currentTarget.dataset['type'];
    var produce_index = e.currentTarget.dataset['produce'];
    console.log(this.data.rightData[type_index].frist[produce_index].number)
    this.data.rightData[type_index].frist[produce_index].number++;
    this.data.bag.number++;
    this.data.bag.price += this.data.rightData[type_index].frist[produce_index].money;
    this.setData({
      rightData: this.data.rightData,
      bag:this.data.bag,
    });
  },

  // 点击减少事件
  minus: function (e) {
    var type_index = e.currentTarget.dataset['type'];
    var produce_index = e.currentTarget.dataset['produce'];
    console.log(this.data.rightData[type_index].frist[produce_index].number)
    this.data.rightData[type_index].frist[produce_index].number--;
    this.data.bag.number--;
    this.data.bag.price -= this.data.rightData[type_index].frist[produce_index].money;
    this.setData({
      rightData: this.data.rightData,
      bag: this.data.bag,
    });
  },
  // 点击产品获取详情
  produce_detail:function(e){
    var type_index = e.currentTarget.dataset['type'];
    var produce_index = e.currentTarget.dataset['produce'];
    this.setData({
      detail_show: !this.data.detail_show,
      grey: !this.data.grey,
      'produce_detail.title': this.data.rightData[type_index].frist[produce_index].text,
      'produce_detail.info': this.data.rightData[type_index].frist[produce_index].info,
      'produce_detail.price': this.data.rightData[type_index].frist[produce_index].money,
    });
  },
  // 点击关闭详情
  detail_cancel:function(e){
    this.setData({
      detail_show:!this.data.detail_show,
      grey: !this.data.grey,
    });
  },
  // 点击显示购物袋信息
  bag_show:function(e){
    this.setData({
      bag_detail_show:!this.data.bag_detail_show,
      grey:!this.data.grey,
    });
  },
  // 清空购物袋
  del_bag: function (e) {
    
  },
  // 订单结算
  order:function(e){
    wx.navigateTo({
      url: 'order/order',
    })
  }
})

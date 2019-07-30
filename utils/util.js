const formatTime = date => {
  var date = new Date(date * 1000)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * 封装微信的request
 */
function request(url, data = {}, method = "GET", header = "application/json") {
  wx.showLoading({
    title: '加载中...',
  });
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': header,
      },
      success: function (res) {
        wx.hideLoading();
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }
      },
      fail: function (err) {
        wx.hideLoading();
        wx.showToast({
          title: '网络连接失败，请检查网络设置',
          icon: "none"
        })

        reject(err)
      }
    })
  });
}


module.exports = {
  formatTime: formatTime,
  request: request
}

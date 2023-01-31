// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //定位
    wx.getLocation({
      success:(res)=>{
        var lat=res.latitude;
        var lng=res.longitude;
        //发起 腾讯地图api 请求
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?location='+lat+','+lng+'&key=WUNBZ-KDBE3-YDH3R-YMVWI-BWOS2-CQBES&get_poi=0',
          method:'GET',
          success:(res)=>{
            this.setData({
              location:res.data
            })
            console.log(res.data);
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
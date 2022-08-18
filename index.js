// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['山东省','青岛市','崂山区'],
    now:''
  },

  changeRegion:function(e){
    this.setData({
      region : e.detail.value
    })

    this.getWeather(); //更新天气
  },

  getWeather : function(){
    var that = this;
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?',
      data:{
        location :that.data.region[1],
        key : '65b32a5778c0421297c27643ec1ee833'
      },

      success(res1){
        // console.log(res1.data);
        that.setData({Place_ID:res1.data.location[0].id})  //将城市ID用变量存储
        wx.request({
          url: 'https://devapi.qweather.com/v7/weather/now?',
          data:{
            location: that.data.Place_ID,
            key:'65b32a5778c0421297c27643ec1ee833'
          },
    
          success:function(res){
            // console.log(res.data)
            that.setData({now:res.data.now})
          }
        })
      }

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getWeather()
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
// pages/Add/AddMenu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    season:["春","夏","秋","冬"],
    seasonindex:1,
    breakfast: { value:"breakfast",checked:true}
  },


  bindSeasonPickerChange: function (e) {
    this.setData({
      seasonindex: e.detail.value
    })
  },
  sliderMeatChange: function (e) {
    console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
  },
  sliderVegChange: function (e) {
    console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
  },
  sliderSoupChange: function (e) {
    console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
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
  
  }
})
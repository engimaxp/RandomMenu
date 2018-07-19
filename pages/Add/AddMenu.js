// pages/Add/AddMenu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    N: "",
    MA: "",
    B: false,
    MT: 0,
    VE: 0,
    SP: 0,
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
    console.log('form发生了submit事件，携带数据为：', e.detail.value);

    var current = e.detail.value;
    current.B = current.B.length > 0;
    if (current.MA.length === 0 || current.N.length === 0) {
      wx.showToast({
        title: '请填写完整',
        icon: 'loading'
      })
      return;
    }
    current.MA = current.MA.trim().split(",");
    current.N = current.N.trim();

    var menuData = wx.getStorageSync("menuData") || [];
    var findex = menuData.findIndex(x => x.N === current.N);
    if (findex >= 0) {
      menuData.splice(findex, 1, current);
    } else {
      menuData.push(e.detail.value);
    }
    wx.setStorageSync("menuData", menuData);
    wx.navigateTo({
      url: '../menucrud/menucrud',
    })
  },

  formReset: function () {
    console.log('form发生了reset事件');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option.N);
    if (!option.N) return;
    var menuData = wx.getStorageSync("menuData") || [];
    console.log(menuData.length);
    var item = menuData.find(x => x.N === option.N);
    if (!item) return;
    wx.setNavigationBarTitle({
      title: '编辑菜谱'
    });
    this.setData({
      N: item.N.trim(),
      MA: item.MA.join(",").trim(),
      B: item.B,
      MT: item.MT ? item.MT : 0,
      VE: item.VE ? item.VE : 0,
      SP: item.SP ? item.SP : 0,
    });

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
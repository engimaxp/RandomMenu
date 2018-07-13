//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  
  onLoad: function () {
    wx.navigateTo({
      url: '../Add/AddMenu',
    })
  },
  jumpToMenuCrud:function(e){
    wx.navigateTo({
      url: '../menucrud/menucrud',
    })
  }
})

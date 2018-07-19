// pages/menucrud.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData: [],
    sectionData: [],
    searchbox: "",
    mtsort: true,
    vesort: true,
    spsort: true,
    bsort: true
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  jumpToAdd: function (e) {
    wx.navigateTo({
      url: '../Add/AddMenu',
    })
  },
  tapmenu:function(e){
    var N = e.currentTarget.id;
    console.log(e);
    if(!N) return;
    wx.navigateTo({
      url: '../Add/AddMenu?N='+N,
    })
  },
  clearMenu:function(e){
    wx.setStorageSync("menuData", "");
    this.setData({
      allData: [],
      sectionData: []
      });
  },
  bindKeyInput: function (e) {
    this.setData({
      searchbox: e.detail.value
    })
  },

  mtSorttap: function (e) {
    var cur = this.data.sectionData;
    if (this.data.mtsort) {
      cur.sort((a, b) => {
        return a.MT - b.MT
      });
    } else {
      cur.sort((a, b) => {
        return b.MT - a.MT
      });
    }
    var newsort = !this.data.mtsort;
    this.setData({
      sectionData: cur,
      mtsort: newsort
    });
  },
  breakfasttap: function (e) {
    var cur = this.data.sectionData;
    if (this.data.bsort) {
      cur.sort((a, b) => {
        return (a.B ? 1 : 0) - (b.B ? 1 : 0)
      });
    } else {
      cur.sort((a, b) => {
        return (b.B ? 1 : 0) - (a.B ? 1 : 0)
      });
    }
    var newsort = !this.data.bsort;
    this.setData({
      sectionData: cur,
      bsort: newsort
    });
  },
  veSorttap: function (e) {
    var cur = this.data.sectionData;
    if (this.data.vesort) {
      cur.sort((a, b) => {
        return a.VE - b.VE
      });
    } else {
      cur.sort((a, b) => {
        return b.VE - a.VE
      });
    }
    var newsort = !this.data.vesort;
    this.setData({
      sectionData: cur,
      vesort: newsort
    });
  },
  spSorttap: function (e) {
    var cur = this.data.sectionData;
    if (this.data.spsort) {
      cur.sort((a, b) => {
        return a.SP - b.SP
      });
    } else {
      cur.sort((a, b) => {
        return b.SP - a.SP
      });
    }
    var newsort = !this.data.spsort;
    this.setData({
      sectionData: cur,
      spsort: newsort
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var menuData = wx.getStorageSync("menuData") || [];

    if (menuData.length === 0) {
      menuData = [{ "N": "炒青菜", "MA": ["青菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "炒生菜", "MA": ["生菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "芥兰", "MA": ["芥兰"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "莴笋丝", "MA": ["莴笋丝"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "西葫芦", "MA": ["西葫芦"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "醋溜白菜", "MA": ["白菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "炒豇豆", "MA": ["豇豆"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "马蹄肉片", "MA": ["马蹄", "肉"], "B": false, "MT": 3, "VE": 4, "SP": 0 },
      { "N": "土豆丝", "MA": ["土豆"], "B": false, "MT": 0, "VE": 5, "SP": 0 },
      { "N": "虾皮冬瓜", "MA": ["冬瓜"], "B": false, "MT": 0, "VE": 4, "SP": 10 },
      { "N": "炒空心菜", "MA": ["空心菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "米苋", "MA": ["米苋"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "茭白肉丝", "MA": ["茭白", "肉"], "B": false, "MT": 3, "VE": 4, "SP": 0 },
      { "N": "炒南瓜", "MA": ["南瓜"], "B": false, "MT": 0, "VE": 5, "SP": 0 },
      { "N": "番茄炒蛋", "MA": ["番茄", "蛋"], "B": false, "MT": 3, "VE": 4, "SP": 0 },
      { "N": "红烧茄子", "MA": ["茄子"], "B": false, "MT": 0, "VE": 5, "SP": 0 },
      { "N": "糖醋藕片", "MA": ["藕"], "B": false, "MT": 0, "VE": 5, "SP": 0 },
      { "N": "卷心菜", "MA": ["卷心菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "竹笋肉片", "MA": ["竹笋", "肉"], "B": false, "MT": 3, "VE": 4, "SP": 0 },
      { "N": "菠菜", "MA": ["菠菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "芦笋", "MA": ["芦笋"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "茼蒿", "MA": ["茼蒿"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "芦蒿", "MA": ["芦蒿"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "蓬蒿", "MA": ["蓬蒿"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "荠菜鸡丝", "MA": ["荠菜", "鸡"], "B": false, "MT": 3, "VE": 4, "SP": 0 },
      { "N": "炒豆苗", "MA": ["豆苗"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "炒菊花菜", "MA": ["菊花菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "酒香草头", "MA": ["草头"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "西兰花", "MA": ["西兰花"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "干锅花菜", "MA": ["花菜"], "B": false, "MT": 0, "VE": 5, "SP": 0 },
      { "N": "炒蘑菇", "MA": ["菌菇"], "B": false, "MT": 0, "VE": 4, "SP": 0 },
      { "N": "地瓜叶", "MA": ["地瓜叶"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "油麦菜", "MA": ["油麦菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "芹菜", "MA": ["芹菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "素鸡炒毛豆", "MA": ["素鸡", "毛豆"], "B": false, "MT": 2, "VE": 4, "SP": 0 },
      { "N": "凉拌小素鸡", "MA": ["素鸡"], "B": false, "MT": 2, "VE": 4, "SP": 0 },
      { "N": "青椒丝豆腐干丝", "MA": ["青椒", "豆腐"], "B": false, "MT": 2, "VE": 4, "SP": 0 },
      { "N": "塔菜", "MA": ["塔菜"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "红烧鸡块", "MA": ["鸡"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "多宝鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "黄鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "笋壳鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "柠檬鲈鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "鳜鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "红烧大排", "MA": ["猪"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "糖醋小排", "MA": ["猪"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "鸽子", "MA": ["鸽"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "牛蛙", "MA": ["蛙"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "红烧牛肉", "MA": ["牛"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "大头虾", "MA": ["虾"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "带鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "梭子蟹", "MA": ["蟹"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "银鱼炒蛋", "MA": ["鱼", "蛋"], "B": false, "MT": 5, "VE": 0, "SP": 0 },
      { "N": "葱油鸡", "MA": ["鸡"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "乌骨鸡汤", "MA": ["鸡"], "B": false, "MT": 5, "VE": 0, "SP": 10 },
      { "N": "排骨汤", "MA": ["猪"], "B": false, "MT": 5, "VE": 0, "SP": 10 },
      { "N": "昂刺鱼汤", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 10 },
      { "N": "丝瓜汤", "MA": ["丝瓜"], "B": false, "MT": 0, "VE": 4, "SP": 10 },
      { "N": "黄鳝汤", "MA": ["黄鳝"], "B": false, "MT": 5, "VE": 0, "SP": 10 },
      { "N": "红烧鳝背", "MA": ["黄鳝"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "紫菜蛋花汤", "MA": ["蛋"], "B": false, "MT": 3, "VE": 3, "SP": 10 },
      { "N": "菌菇蛋花汤", "MA": ["蛋", "菌菇"], "B": false, "MT": 3, "VE": 4, "SP": 10 },
      { "N": "菌菇炒肉片", "MA": ["肉", "菌菇"], "B": false, "MT": 3, "VE": 4, "SP": 0 },
      { "N": "红烧扁鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "糖醋鲈鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "红烧鲳鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "鸡腿菇炒墨鱼", "MA": ["鱼"], "B": false, "MT": 4, "VE": 4, "SP": 0 },
      { "N": "巴沙鱼柳", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "红烧鸡翅", "MA": ["鸡"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "虾仁炒蛋", "MA": ["虾"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "牛肉汤", "MA": ["牛"], "B": false, "MT": 6, "VE": 0, "SP": 10 },
      { "N": "番茄汤", "MA": ["番茄"], "B": false, "MT": 0, "VE": 5, "SP": 10 },
      { "N": "八宝辣酱", "MA": ["猪"], "B": false, "MT": 6, "VE": 2, "SP": 0 },
      { "N": "咖喱牛肉", "MA": ["牛"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "羊肉汤", "MA": ["羊"], "B": false, "MT": 6, "VE": 0, "SP": 10 },
      { "N": "鸡汤", "MA": ["鸡"], "B": false, "MT": 6, "VE": 0, "SP": 10 },
      { "N": "木耳炒肉片", "MA": ["肉"], "B": false, "MT": 3, "VE": 3, "SP": 0 },
      { "N": "白米虾", "MA": ["虾"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "基围虾", "MA": ["虾"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "班节虾", "MA": ["虾"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "炒蚕豆", "MA": ["蚕豆"], "B": false, "MT": 0, "VE": 6, "SP": 0 },
      { "N": "光明村牛肉", "MA": ["牛"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "红烧狮子头", "MA": ["猪"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "银鳕鱼", "MA": ["鱼"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "光明村基围虾", "MA": ["虾"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "炒猪肝", "MA": ["猪"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "山林熟食牛肉", "MA": ["牛"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "茶树菇蒸鸡", "MA": ["鸡"], "B": false, "MT": 5, "VE": 3, "SP": 0 },
      { "N": "日式肥牛", "MA": ["牛"], "B": false, "MT": 6, "VE": 0, "SP": 0 },
      { "N": "饭团", "MA": ["饭团"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "面包", "MA": ["面包"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "葱油饼", "MA": ["葱油饼"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "洪兴大包", "MA": ["洪兴大包"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "猪肉帕尼尼", "MA": ["猪肉帕尼尼"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "千层饼", "MA": ["千层饼"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "煎饼果子", "MA": ["煎饼果子"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "玉米", "MA": ["玉米"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "寿司手卷", "MA": ["寿司手卷"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "粽子", "MA": ["粽子"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "咸大饼", "MA": ["咸大饼"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "银耳汤", "MA": ["银耳汤"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "全家包子", "MA": ["全家包子"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "山药", "MA": ["山药"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "麦片", "MA": ["麦片"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "鸡蛋饼", "MA": ["鸡蛋饼"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "藕粉", "MA": ["藕粉"], "B": true, "MT": 0, "VE": 0, "SP": 0 },
      { "N": "萝卜牛腩", "MA": ["萝卜,牛"], "B": false, "MT": 5, "VE": 4, "SP": 0 },
      { "N": "萝卜汤", "MA": ["萝卜"], "B": false, "MT": 0, "VE": 4, "SP": 10 }
      ];
      wx.setStorageSync("menuData", menuData);
    }

    this.setData({
      sectionData: menuData,
      allData: menuData
    });
    console.log(menuData.length);
  },


  search: function () {
    console.log(this.data.searchbox);

    if (this.data.searchbox) {

      var newSectionData =
        this.data.allData.filter(x => x.N.indexOf(this.data.searchbox) >= 0 || x.MA.join(",").indexOf(this.data.searchbox) >= 0);

      this.setData({
        sectionData: newSectionData,
      });
    } else {

      var menuData = wx.getStorageSync("menuData") || [];

      this.setData({
        sectionData: menuData,
        allData: menuData
      });
    }

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
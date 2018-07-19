//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sectionData: [],
    nextDayData: [],
    Dflag: false,
    Bflag: false,
    Lflag: false,
    Lmin: { MT: 0, VE: 0, SP: 0 },
    Dmin: { MT: 0, VE: 0, SP: 0 },
    Brandom: [],
    LDrandom: [],

  },


  onLoad: function () {

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

    var nextDayData = wx.getStorageSync("nextDayData") || [];

    //calc current Lmin & Dmin
    if (nextDayData.length > 0) {
      var Lmin = {
        MT: 6 - nextDayData[0].L.reduce((total, c) => { return total + c.MT; }, 0),
        VE: 7 - nextDayData[0].L.reduce((total, c) => { return total + c.VE; }, 0),
        SP: 8 - nextDayData[0].L.reduce((total, c) => { return total + c.SP; }, 0),
      };
      var Dmin = {
        MT: 6 - nextDayData[0].D.reduce((total, c) => { return total + c.MT; }, 0),
        VE: 7 - nextDayData[0].D.reduce((total, c) => { return total + c.VE; }, 0),
        SP: 8 - nextDayData[0].D.reduce((total, c) => { return total + c.SP; }, 0),
      };
    } else {
      var Lmin = { MT: 6, VE: 7, SP: 8 };
      var Dmin = { MT: 6, VE: 7, SP: 8 };
    }
    this.setData({
      Lmin: Lmin,
      Dmin: Dmin
    });

    this.setData({
      sectionData: wx.getStorageSync("historyData") || [],
      nextDayData: nextDayData,
    });
    this.initialRandom();
    if (nextDayData.length === 0) {
      this.randommenu();
    }
    console.log(this.data);
  },

  setNextDayData: function (nextDayData) {
    wx.setStorageSync("nextDayData", nextDayData);
    this.setData({
      nextDayData: nextDayData
    });
  },
  initialRandom: function () {
    //initialize storage menudata
    var menudata = wx.getStorageSync("menuData") || [];
    if (menudata.length !== 0) {
      menudata.forEach((v, i) => {
        if (v.R === undefined) {
          var R = menudata.reduce((total, c) => {
            if (c.R !== undefined
              && c.R < total
              && c.MA.reduce((flag, a) => {
                if (!flag) {
                  if (v.MA.indexOf(a) >= 0) return true
                }
                return flag;
              }, false)
            ) {
              return c.R;
            }
            return total;
          }, 14);
          v.R = R;
        }
      });
    }
    wx.setStorageSync("menuData", menudata);
    //storage menu => this.data
    this.storageToLocalMenu();
  },
  storageToLocalMenu: function () {
    var menudata = wx.getStorageSync("menuData") || [];
    var menuBrandom = menudata.filter(x => x.B).map((x, i) => {
      return {
        N: x.N,
        R: x.R,
        MA: x.MA,
        MT: x.MT,
        VE: x.VE,
        SP: x.SP,
      }
    });
    var menuLDrandom = menudata.filter(x => !x.B).map((x, i) => {
      return {
        N: x.N,
        R: x.R,
        MA: x.MA,
        MT: x.MT,
        VE: x.VE,
        SP: x.SP,
      }
    });
    this.setData({
      Brandom: menuBrandom,
      LDrandom: menuLDrandom,
    });
  },
  finalizeRandom: function () {
    var menuBrandom = this.data.Brandom;
    menuBrandom.filter(x => x.R < 14 && x.R > 0).forEach(x => { x.R = x.R + 1; });
    this.setData({
      Brandom: menuBrandom
    });
    var menuLDrandom = this.data.LDrandom;
    menuLDrandom.filter(x => x.R < 14 && x.R > 0).forEach(x => { x.R = x.R + 1; });
    this.setData({
      LDrandom: menuLDrandom
    });
  },

  randomBreakfast: function (e) {
    var menupool = this.data.Brandom;
    if (menupool.length === 0) return;
    var sum = menupool.reduce((total, c) => { return total + (c.R < 0 ? 0 : c.R) }, 0);
    var curRandom = Math.floor(Math.random() * sum);
    var randomMenu = undefined;
    for (var i = 0; i < menupool.length; i++) {
      curRandom = curRandom - (menupool[i].R < 0 ? 0 : menupool[i].R);
      if (curRandom <= 0) {
        randomMenu = menupool[i];
        console.log("selected breakfast：" + menupool[i].N + " " + menupool[i].R);
        menupool[i].R = 1;
        break;
      }
    }
    this.setData({
      Brandom: menupool,
    });
    return randomMenu
  },
  setSameMTRandomZero: function (menupool, N) {
    var selectedMenu = menupool.find(x => x.N === N);
    menupool.forEach(x => {
      if (x.N === N) {
        x.R = -2;
      }
      else if (x.R >= 0 && !x.MA.every(y => selectedMenu.MA.every(z => y !== z))) {
        x.R = -1;
      }
    });
    this.setData({
      LDrandom: menupool,
    });
  },
  setSameMTStorageZero: function (menudata,N) {
    var selectedMenu = menudata.find(x => x.N === N);
    menudata.forEach(x => {
      if (x.N === N) {
        x.R = -1;
      }
      else if (x.R > 0 && !x.MA.every(y => selectedMenu.MA.every(z => y !== z))) {
        x.R = 0;
      }
    });
  },
  calR: function (menu, flag) {
    if (flag == 1 || flag == 2) {
      return menu.R < 0 ? 0 : menu.R;
    } else {
      var mts = flag.MT > 0 ? menu.MT : 0;
      var ves = flag.VE > 0 ? menu.VE : 0;
      var sps = flag.SP > 0 ? menu.SP : 0;
      var factor = (mts > 0 && ves > 0) ? 2 : 1
      return menu.R < 0 ? 0 : (menu.R + (mts + ves + sps) * factor)
    }
  },
  fetchArandomMeal: function (flag) {
    var totalpool = this.data.LDrandom;
    var menupool = totalpool.filter(x => x.R > 0);
    //soup
    if (flag === 1) {
      menupool = menupool.filter(x => x.SP >= 5);
    }
    //meat
    else if (flag === 2) {
      menupool = menupool.filter(x => x.MT >= 5);
    }
    else {
      if (flag.SP <= 0) menupool = menupool.filter(x => x.SP === 0);
      if (flag.MT <= 0) menupool = menupool.filter(x => x.MT === 0);
      else {
        menupool = menupool.filter(x => x.MT !== 0);
      }
    }
    if (menupool.length === 0) return;
    var sum = menupool.reduce((total, c) => { return total + this.calR(c, flag) }, 0);
    var curRandom = Math.floor(Math.random() * sum);
    var randomMenu = undefined;
    for (var i = 0; i < menupool.length; i++) {
      curRandom = curRandom - this.calR(menupool[i], flag);
      if (curRandom <= 0) {
        randomMenu = menupool[i];
        console.log("selected meal：" + menupool[i].N + " " + menupool[i].R);
        this.setSameMTRandomZero(totalpool, menupool[i].N);
        break;
      }
    }
    return randomMenu
  },

  randomMeals: function (isLunch, lunchSoup) {
    var curMin = isLunch ? this.data.Lmin : this.data.Dmin;
    var meals = [];
    var count = 6;
    //SP
    while (curMin.SP > 0 || curMin.MT > 0 || curMin.VE > 0) {
      count = count - 1;
      if (count < 0) {
        break;
      }
      if (curMin.SP > 0) {
        var sp = undefined;
        if (!isLunch && lunchSoup) {
          sp = lunchSoup;
        }
        if (!sp) {
          sp = this.fetchArandomMeal(1);
        }
        if (sp) {
          curMin.SP = curMin.SP - sp.SP;
          curMin.MT = curMin.MT - sp.MT;
          curMin.VE = curMin.VE - sp.VE;
        }
        meals.push(sp);
      } else if (curMin.MT > 4) {
        var mt = this.fetchArandomMeal(2);
        if (mt) {
          curMin.SP = curMin.SP - mt.SP;
          curMin.MT = curMin.MT - mt.MT;
          curMin.VE = curMin.VE - mt.VE;
        }
        meals.push(mt);
      } else {
        var other = this.fetchArandomMeal(curMin);
        if (other) {
          curMin.SP = curMin.SP - other.SP;
          curMin.MT = curMin.MT - other.MT;
          curMin.VE = curMin.VE - other.VE;
        }
        meals.push(other);
      }
    }
    if (isLunch) {
      this.setData({
        Lmin: curMin
      });
    } else {
      this.setData({
        Dmin: curMin
      });
    }
    return meals;
  },

  localStorageMenuReset: function () {
    var LDrandom = this.data.LDrandom;
    LDrandom.forEach(x => { if (x.R <= 0) { x.R = x.R+1; } });
    this.setData({ LDrandom: LDrandom });
  },
  randommenu: function (e) {
    var currentRandom = this.data.nextDayData || [];
    if (currentRandom.length === 0) {
      //random all
      this.localStorageMenuReset();
      //breakfast
      var breakfast = this.randomBreakfast();
      //lunch
      var lunch = this.randomMeals(true);
      //Dinner
      var dinner = this.randomMeals(false, lunch.find(x => x.SP > 5));
      currentRandom = [{ B: [breakfast], L: lunch, D: dinner }];
    } else if (currentRandom[0].B.every((v, i) => { return !v.S })
      && currentRandom[0].L.every((v, i) => { return !v.S })
      && currentRandom[0].D.every((v, i) => { return !v.S })
    ) {
      this.localStorageMenuReset();
      //breakfast
      var breakfast = this.randomBreakfast();
      currentRandom[0].B = [breakfast];

      this.setData({
        Lmin: { MT: 6, VE: 7, SP: 8 },
        Dmin: { MT: 6, VE: 7, SP: 8 }
      });

      //lunch
      var lunch = this.randomMeals(true);
      currentRandom[0].L = lunch;
      //dinner
      var dinner = this.randomMeals(false, lunch.find(x => x.SP > 5));
      currentRandom[0].D = dinner;
    } else {
      //breakfast
      currentRandom[0].B.filter(x => x.S).forEach(y => {
        var z = this.randomBreakfast();
        y.N = z.N;
        y.R = z.R;
        y.MA = z.MA;
        y.MT = z.MT;
        y.VE = z.VE;
        y.SP = z.SP;
        y.S = false;
      });
      //lunch
      var Lmin = this.data.Lmin;
      currentRandom[0].L.filter(x => x.S).forEach(y => {
        Lmin.MT = Lmin.MT + y.MT;
        Lmin.VE = Lmin.VE + y.VE;
        Lmin.SP = Lmin.SP + y.SP;
      });
      //TODO:set all R back to normal
      var lunch = this.randomMeals(true);
      currentRandom[0].L = lunch.concat(currentRandom[0].L.filter(x => !x.S));
      //dinner

      var Dmin = this.data.Dmin;
      currentRandom[0].D.filter(x => x.S).forEach(y => {
        Dmin.MT = Dmin.MT + y.MT;
        Dmin.VE = Dmin.VE + y.VE;
        Dmin.SP = Dmin.SP + y.SP;
      });
      //set all R back to normal
      var dinner = this.randomMeals(false);
      currentRandom[0].D = dinner.concat(currentRandom[0].D.filter(x => !x.S));
    }
    this.setNextDayData(currentRandom);
    this.finalizeRandom();
  },

  jumpToMenuCrud: function (e) {
    wx.navigateTo({
      url: '../menucrud/menucrud',
    })
  },
  deletehistory: function (e) {
    var DT = e.currentTarget.id;
    var find = this.data.sectionData.findIndex(x => x.DT === DT);
    if (find >= 0) {
      var newdata = this.data.sectionData;
      newdata.splice(find, 1);
      wx.setStorageSync("historyData", newdata);
      this.setData({
        sectionData: newdata
      });
    }
  },
  selectColumn: function (e) {
    var newset = this.data.nextDayData;
    if (e.currentTarget.dataset.m === "D") {
      var flag = this.data.Dflag;
      newset[0].D.forEach(x => x.S = !flag);
      this.setData({
        Dflag: !flag
      })
    } else if (e.currentTarget.dataset.m === "B") {
      var flag = this.data.Bflag;
      newset[0].B.forEach(x => x.S = !flag);
      this.setData({
        Bflag: !flag
      })
    } else if (e.currentTarget.dataset.m === "L") {
      var flag = this.data.Lflag;
      newset[0].L.forEach(x => x.S = !flag);
      this.setData({
        Lflag: !flag
      })
    }
    this.setNextDayData(newset);
  },
  selectOne: function (e) {
    var dishname = e.currentTarget.id;
    var newset = this.data.nextDayData;
    if (e.currentTarget.dataset.m === "D") {
      var index = newset[0].D.findIndex(x => x.N === dishname);
      newset[0].D[index].S = !newset[0].D[index].S;
    } else if (e.currentTarget.dataset.m === "B") {
      var index = newset[0].B.findIndex(x => x.N === dishname);
      newset[0].B[index].S = !newset[0].B[index].S;
    } else if (e.currentTarget.dataset.m === "L") {
      var index = newset[0].L.findIndex(x => x.N === dishname);
      newset[0].L[index].S = !newset[0].L[index].S;
    }
    this.setNextDayData(newset);
  },
  switchdisplay:function(e){
    var newswitch = !this.data.switch;
    this.setData({
      switch:newswitch
    });
  },
  confirm: function (e) {
    var data = this.data.sectionData;
    var curdata = this.data.nextDayData;

    var newdata = {
      DT: (new Date().getMonth()+1) + "/" + new Date().getDate(),
      B: curdata[0].B,
      L: curdata[0].L,
      D: curdata[0].D,
    }
    if (data.length === 0) {
      data.push(newdata);
    } else {
      var a = new Date(data[0].DT);
      a.setDate(a.getDate() + 1);
      newdata.DT = (a.getMonth()+1)+"/"+a.getDate();
      data.unshift(newdata);
    }
    wx.setStorageSync("historyData", data);
    this.setData({
      sectionData: data
    });

    var menuData = wx.getStorageSync("menuData") || [];
    newdata.B.forEach(x => this.setSameMTStorageZero(menuData, x.N));
    newdata.L.forEach(x => this.setSameMTStorageZero(menuData, x.N));
    newdata.D.forEach(x => this.setSameMTStorageZero(menuData, x.N));
    wx.setStorageSync("menuData", menuData);

    this.randommenu();
    console.log(this.data.LDrandom);
  },
  reset: function (e) {
    wx.setStorageSync("historyData", []);
    wx.setStorageSync("nextDayData", []);
    var menudata = wx.getStorageSync("menuData") || [];
    menudata.forEach((v, i) => {
      v.R = 14;
    });
    wx.setStorageSync("menuData", menudata)
    this.setData({
      sectionData: [],
      Brandom: [],
      LDrandom: [],
      nextDayData: [],
    });
    this.initialRandom();
  },
})

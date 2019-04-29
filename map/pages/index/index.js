//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 39.908860,
    longitude: 116.397390,
    scale: 18
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady() {
    this.mapCtx = wx.createMapContext('myMap');
  },
  onLoad: function () {
      wx.getLocation({
        type: 'gcj02',
        success:(res) => {
          this.setData({
            longitude: res.longitude,
            latitude: res.latitude
          })
          setTimeout(() => {
            this.mapCtx.getCenterLocation({
              success: (res) => {
                this.generateMakers(res);
              }
            })
          },1000)
        }
      })  
  },
  generateMakers:function(res){
    let ran = Math.ceil(Math.random() * 20);
    let markers = [];
    for(let i = 0; i < ran; i++) {
      let marker = {
        id: 1,
        title: '去这里',
        iconPath: '/images/map-bicycle.png',
        width: 52,
        height: 30
      }
      let sign_a = Math.random();
      let sign_b = Math.random();
      let a = (Math.ceil(Math.random() * 99)) * 0.00002;
      let b = (Math.ceil(Math.random() * 99)) * 0.00002;
      maker.latitude = sign_a > 0.5 ? res.latitude + a : res.latitude - a;
      maker.latitude = sign_b > 0.5 ? res.latitude + b : res.latitude - b;
      markers.push(maker);
    }
    this.setData({
      makers
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

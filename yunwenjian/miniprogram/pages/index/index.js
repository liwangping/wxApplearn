const db = wx.cloud.database();
//找到userinfo表
const userInfo = db.collection('userInfo');          

Page({
  data: {
    userList: []
  },
  getUserInfo: function(result) {
    console.log(result);
    // 用户_openid 前端是拿不到的，
    // 云开发能够拿到
    wx
      .cloud
      .callFunction({
        name: 'getOpenId',
        complete: res => {
          //云数据库中，传一个json 代表一条记录
          //数量
          //不是结果，是符合条件的数量
          userInfo.where({
            _openId: res.result.openid
          }).count().then(res => {
            if(res.total == 0) {
                  userInfo.add({
                data: result.detail.userInfo
              })
              .then(res => {
                console.log(res);
              })
            }else {
              // console.log('加过了');
              wx.navigateTo({
                url: '/pages/add/add',
                success: function(res){

                }
              })
            }
          })
          console.log(result.detail.userInfo)
        // console.log(res.result.openId)
        }
      })
  },
  onLoad: function(options){
    userInfo.get()
    .then(res=>{
      this.setData({
        userList: res.data
      })
    })
  }
})

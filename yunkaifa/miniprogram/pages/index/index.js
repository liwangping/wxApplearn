// miniprogram/pages/index/index.js
const db = wx.cloud.database();
const productsCollection = db.collection('products');
const _ = db.command;
Page({ 

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // productsCollection.get().then(res => {
    //   this.setData({
    //     products: res.data
    //   })
    // })

    // productsCollection.doc('9c4488c75cc3d3580773abad11553f7e').get().then(res => {
    // console.log(res.data)
    // })//查询单个id

    // productsCollection.where({
    //   _openid: 'oB9sD5oSqoPY8NB6laBj-eZmSYlw'}).get().then(res => {
    //     this.setData({
    //       products: res.data
    //     })
    //   })
    // //where查询满足where条件的所有集合

    // productsCollection.where({
    //   view: _.gt(2)
    // }).get().then(res => {
    //   this.setData({
    //     products: res.data
    //   })
    // })//用_来查询command命令上的指令，gt(2)表示大于view大于2的

    // productsCollection.where({
    //   view: _.gt(2).and(_.lt(4))
    // }).get().then(res => {
    //   this.setData({
    //     products: res.data
    //   })
    // })//用_来查询command命令上的指令，and表示满足两个条件的

    // productsCollection.doc('9c4488c75cc4438607be144336739a30').update({
    //   // data 传入需要局部更新的数据
    //   data: {
    //     color: "red"
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })

    // productsCollection.doc('9c4488c75cc4438607be144336739a30').update({
    //   data: {
    //     price: _.inc(10)
    //   },
    //   success(res) {
    //     console.log(res.data)
    //     // this.setData({
    //     // products: res.data
    //     // })
    //   }
    // })
    // productsCollection.doc('9c4488c75cc4438607be144336739a30').update({
    //   data: {
    //     color: _.set({
    //       style: 'blue'
    //     })
    //   },
    //   success(res){
    //     console.log(res.data);
    //   }
    // })
    // productsCollection.doc('9c4488c75cc4438607be144336739a30').remove({
    //   success(res){
    //     console.log(res.data)
    //   }
    // })

    
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
    productsCollection.get().then(res => {
      this.setData({
        products:res.data
      },res =>{
        console.log('更新完成');
        wx.stopPullDownRefresh();
      }
      )
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let page = this.data.page + 20;
    productsCollection.skip(page).get().then(res => {
      let new_data = res.data;
      let old_data = this.data.products;
      this.setData({
        products: old_data.concat(new_data),
        page: page
      },res2 => {
        console.log(`第${page}页数据加载`);
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
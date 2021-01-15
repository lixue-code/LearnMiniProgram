// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"lixue",
    age:12,
    students:[
      {id:1,name:'lixue'},
      {id:2,name:'zhangsan'},
      {id:3,name:'lisi'},
      {id:4,name:'wangwu'},
      {id:5,name:'zhaoliu'},
    ],
    counter:0

  },

  /**
   * 自定义函数
   */
  handlerButtonClick(){
      //1.界面不会刷新
      // console.log("按钮点击了");
      // console.log( this.data.counter++);

      //2.this.setData();
      this.setData({
        counter:this.data.counter+1
      });

  },
  subHandlerButtonClick(){
    console.log("点击了减号");
    this.setData({
      counter:this.data.counter-1
    });
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
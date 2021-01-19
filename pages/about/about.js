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

  handlerGetUserInfo(event){
    console.log(event);
  },


  //生命周期函数
  // 页面加载
  onLoad(){
    console.log("onLoad");
    //发送网络请求
    wx.request({
      url: 'url',
    })
    
  },
  //页面初次渲染完成
  onReady(){
    console.log("onReady");
  },
  //页面显示
  onShow(){
    console.log("onShow");
  },
  //页面隐藏
  onHide(){
    console.log("onHide");
  },
  //
  onUnload(){
    console.log("onUnload");
  }
 
  
})
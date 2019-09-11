//app.js
App({
  //初始化
  onLaunch: function () {
      
  },
  //显示
  onShow:function(){
      console.log("show")
  },
  //隐藏
  onHide:function(){
      console.log("hide")
  },
  //出现异常
  onError:function(){

  },
  //设置全局变量
global: {
    userInfo: "zhangsun"
  }
})
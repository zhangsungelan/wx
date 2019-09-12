//index.js
//获取应用实例
const app = getApp()
import request from "../../service/service.js"
Page({
  onLoad: function () {
      request({ url: 'http://httpbin.org/get?name=zhangsun'}).then(res=>{
          console.log(res)
      }).catch(err =>{
          console.log(err)
      })
    // wx.request({
    //     url: 'http://httpbin.org/get?name=zhangsun',
    //     method:"get",
    //     data:{

    //     },
    //     success:function(result){
    //         console.log(result)
    //     },
    //     fail:function(){

    //     },
    //     complete:function(){

    //     }
    // })
  }
})

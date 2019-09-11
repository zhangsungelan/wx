//index.js
//获取app实例
const app=getApp();

Page({
    data:{
        name:"zhangsun"
    },
    //监听页面加载
    onLoad(){

    },
    //页面显示
    onShow(){

    },
    //监听页面初次渲染完成
    onReady(){

    },
    //监听下拉刷新
    onPullDownRefresh(){
        console.log("已经没有了")
    },
    onReachBottom(){
        console.log("已经没有了")
    },
    gewxtUserInfo(event){
        console.log(event.detail.userInfo)
    }
})

Page({
    showToast(){
        wx.showToast({
            title: '你好', //弹窗内容
            icon:"success", //弹窗图标默认success,可选loading,none
            //image可用设置图标，image优先级大于icon
            duration:2000, //弹窗消失时间,默认1500ms
            mask: true, //是否防止触摸穿透，默认false
            success:function(){  //弹窗成功
                console.log("toast show success")
            }
        })
    },
    showModal(){
        wx.showModal({
            title: '即将删除内容',
            content: '确认删除？',
            // 点击过后才执行success
            success:function(result){
                if(result.cancel){
                    console.log("你点击了取消")
                }
                if (result.confirm) {
                    console.log("你点击了确定")
                }
            }
        })
    },
    showLoading(){
        wx.showLoading({
            title: '加载中...',
            mask:true,
            success:function(){
                console.log("正在加载..")
            }
        })
        // showLoading必须通过hideLoading关闭
        setTimeout(()=>{
            wx.hideLoading()
        },2000)
    },
    showAction(){
        wx.showActionSheet({
            itemList: ["sheet1","sheet2","sheet3"],
            // 点击过后才执行success
            success:function(result){
                console.log(result.tapIndex)
            }
        })
    },
    onShareAppMessage(){
        return {
            title:"分享给你",
            path:"/pages/index",
            imageUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4064075977,3738371861&fm=26&gp=0.jpg"
        }
    }
})

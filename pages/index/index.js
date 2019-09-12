

Page({
    data:{
        count:0
    },
    doInc(){
        // 获取组件对象
        var comp=this.selectComponent("#my-int")
        //执行组件对象暴露出来的方法
        comp.doIncreasement(20)
    }
})

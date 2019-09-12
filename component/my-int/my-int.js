// component/my-int/my-int.js
Component({
    options:{
        styleIsolation:"apply-shared",
        multipleSlots:true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:"默认值"
        }
    },
    externalClasses:["contentClass"],

    /**
     * 组件的初始数据
     */
    data: {
        num:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 暴露出增加num的方法
        doIncreasement(incr){
            this.setData({
                num:this.data.num + incr
            })
        }
    }
})

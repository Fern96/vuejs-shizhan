let app=new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'iphone 7',
                price:6188,
                count:1
            },
            {
                id:2,
                name:'ipad pro',
                price:5888,
                count:1
            },
            {
                id:3,
                name:'macbook pro',
                price:21488,
                count:1
            },
        ]
    },
    computed:{
        totalPrice:function(){
            let total=0;
            for (let i=0;i<this.list.length;i++){
                let item=this.list[i];
                total+=item.price*item.count;
            }
            //千位分隔符的转换
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        }
    },
    methods:{
        handleReduce:function (index) {
            if (this.list[index].count===1) return;
            this.list[index].count--;
        },
        handleAdd:function (index) {
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index, 1);
        }
    }
})
function isValueNumber(value){
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'');
}
Vue.component('input-number',{
    template:'<div class="input-number">\
    <input type="text"\
    :value="currentValue"\
    @change="handleChange">\
    <button\
    @click="handleDown"\
    :disabled="currentValue<=min"\>-</button>\
    <button\
     @click="handleUp"\
     :disabled="currentValue<=min">+</button>\
    </div>',
    data(){
        return {
            currentValue:this.value
        }
    },
    watch:{
        //监听currentValue是为了当currentValue改变时，更新value
        currentValue(val){
            this.$emit('input',val);
            this.$emit('on-change',val);
        },
        //监听value是知晓父组件修改了value
        value(val){
            this.updateValue(val);
        }
    },
    methods:{
        updateValue(val){
            if (val>this.max) val = this.max;
            if (val<this.min) val = this.min;
            this.currentVal=val;
        },
        handleDown(){
            if (this.currentVal<=this.min ) return;
            this.currentVal-=1;
        },
        handleUp(){
            if (this.currentVal>=this.max ) return;
            this.currentVal+=1;
        },
        handleChange(event){
            let val=event.target.value.trim();
            let max=this.max;
            let min=this.min;
            if (isValueNumber(val)){
                val = Number(val);
                this.currentVal=val;
                if (val>max){
                    this.currentVal=max;
                } else if (val<min){
                    this.currentVal=min;
                } else{
                    event.target.value= this.currentVal;
                }
            }
        },
        mounted(){
            this.updateValue(this.value)
        }
    },
    props:{
          max:{
              type:Number,
              default:Infinity
          },
          min:{
              type:Number,
              default:-Infinity
          },
          value:{
              type:Number,
              default:0
          }
    }
    }
);
Vue.directive('clickoutside',{
    bind(el,binding,vnode){
        function documentHandler(e){
            if (el.contains(e.target)){
                return false;
            }
            if (binding.expression){
                binding.valueOf(e);
            }
        }
        el.__VueClickOutside__=documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind(el,binding){
        document.removeEventListener('click',el.__VueClickOutside__);
        delete el.__VueClickOutside__;
    }
});
import Vue from 'vue';
import pluralize from 'pluralize';

Vue.use({
    install(Vue, options){
        Vue.mixin({
            methods:{
                pluralize: pluralize
            }
        })
    }
});
import Vue from 'vue'
import App from './App'
import alert from './plugin/vue-alert'

Vue.use(alert)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})

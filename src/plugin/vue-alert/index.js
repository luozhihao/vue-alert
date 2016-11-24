import Alert from './main.vue'

Alert.install = function(Vue) {
	Vue.component(Alert.name, Alert);
}

export default Alert
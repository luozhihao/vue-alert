<template>
	<transition name="el-alert-fade">
		<div v-show="visible">
			<div class="el-alert__content">
		        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
				<p class="el-alert__description">{{ description }}</p>
		        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
	      	</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'vue-alert',
	props: {
		title: {
			type: String,
        	default: ''
		},
		closeText: {
        	type: String,
        	default: ''
      	},
      	closable: {
        	type: Boolean,
        	default: true
      	},
      	description: {
      		type: String,
        	default: ''
      	}
	},
	data() {
      return {
        visible: true
      }
    },
    methods: {
    	close () {
    		console.log(111)
    	}
    },
    computed: {
    	isBoldTitle () {
    		return this.description ? 'is-bold' : '';
    	}
    }
}
</script>

<style>

</style>
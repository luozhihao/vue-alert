<template>
	<transition name="fade">
		<div class="alert-wrap" :class="[ typeStyle ]" v-show="visible">
			<div class="alert-box">
		        <span class="alert-title" :class="[isBold]" v-if="title">{{ title }}</span>
				<p class="alert-description" v-if="description">{{ description }}</p>
		        <i class="alert-closeMenu" v-show="closable" @click="close()">{{ closeText }}</i>
	      	</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'vue-alert',
	props: {
        type: {
          type: String,
          default: 'info'
        },
		title: {
			type: String,
        	default: '',
            required: true
		},
		closeText: {
            type: String,
        	default: '关闭'
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
    data () {
        return {
            visible: true
        }
    },
    methods: {
    	close () {
    		this.visible = false
    	}
    },
    computed: {
        typeStyle () {
            return `alert-${ this.type }`
        },
    	isBold () {
    		return this.description ? 'is-bold' : ''
    	}
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}

.alert-wrap {
    position: relative;
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
    color: #404040;
}

.alert-box {
    padding-left: 8px;
}

.alert-title {
    font-size: 14px;
    line-height: 18px;
}

.is-bold {
    font-weight: 600;
}

.alert-description {
    color: #666;
    font-size: 12px;
    margin: 5px 0 0;
}

.alert-closeMenu {
    font-style: normal;
    font-size: 12px;
    color: #2db7f5;
    opacity: 1;
    top: 9px;
    right: 15px;
    position: absolute;
    cursor: pointer;
}

.alert-info {
    border: 1px solid #d5f1fd;
    background-color: #eaf8fe;
}

.alert-success {
    border: 1px solid #e7f6e1;
    background-color: #f3faf0;
}

.alert-warning {
    border: 1px solid #fdc;
    background-color: #fff7e6;
}

.alert-error {
    border: 1px solid #fdc;
    background-color: #ffeee6;
}
</style>
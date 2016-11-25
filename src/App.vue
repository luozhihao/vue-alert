<template>
    <div id="app">
        <h1 class="plugin-name">vue-alert</h1>
        <p class="plugin-description">警告提示，展现需要关注的信息。</p>
        <div class="plugin-demo">
            <vue-alert
                type="success"
                :title="title"
                :description="description"
                :closeText="closeText"
                :closable="closable"
            ></vue-alert>
            <vue-alert
                type="info"
                :title="title"
                :description="description"
                :closeText="closeText"
                :closable="closable"
            ></vue-alert>
            <vue-alert
                type="warning"
                :title="title"
                :description="description"
                :closeText="closeText"
                :closable="closable"
            ></vue-alert>
            <vue-alert
                type="error"
                :title="title"
                :description="description"
                :closeText="closeText"
                :closable="closable"
            ></vue-alert>
        </div>
        <div class="plugin-operate">
            <button class="plugin-btn" type="button" @click="changeDescription">有/无描述</button>
            <button class="plugin-btn" type="button" @click="changeClosable()">可/不可关闭</button>
            <button class="plugin-btn" type="button" @click="changeCloseText()">自定义关闭按钮</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            title: '提示标题',
            description: '带辅助性文字介绍',
            closeText: '关闭',
            closable: true
        }
    },
    methods: {
        changeDescription () {
            this.description ? this.description = '' : this.description = '带辅助性文字介绍'
        },
        changeClosable () {
            this.closable = !this.closable
        },
        changeCloseText () {
            this.closable = true

            this.closeText === '关闭' ? this.closeText = '知道了' : this.closeText = '关闭'
        }
    }
}
</script>

<style>
#app {
    width: 40%;
    margin: 100px auto 0;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app .alert-wrap {
    margin: 20px 0 0;
}

#app .alert-wrap:first-child {
    margin: 0;
}

.plugin-name {
    color: #404040;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 24px;
    font-size: 28px;
}

.plugin-description {
    color: #666;
    font-size: 14px;
}

.plugin-demo {
    display: inline-block;
    width: 100%;
    position: relative;
    border: 1px solid #e9e9e9;
    border-radius: 6px;
    margin: 20px 0 16px;
    padding: 42px 20px 50px;
}

.plugin-operate {
    text-align: center;
}

.plugin-btn {
    border: 1px solid #ccc;
    padding: 8px 15px;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 10px 10px 0;
    cursor: pointer;
}

.plugin-btn:last-child {
    margin-right: 0;
}

.plugin-btn:focus {
    outline: none;
}

.plugin-btn:hover {
    background: #f5f7f5;
}
</style>


<template>
    <div id="app">
        <vue-alert 
            title="带辅助性文字介绍"
            description="厉害了，我的哥！"
            closeText="知道了"
        ></vue-alert>
        <button type="button">点我提示!</button>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/css/ie.scss';
@media screen and (min-width: 1356px) and (max-width: 1396px){
  .body:first-child .el-card__body {
        width: 1020px;
    }
}
@media screen and (min-width: 1396px) and (max-width: 1440px){
  .body:first-child .el-card__body {
        width: 1150px;
    }
}
@media screen and (min-width: 1431px) and (max-width: 1483px){
  .body:first-child .el-card__body {
        width: 1150px;
    }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0px;
  min-width: 1200px;
}
html,body,#app,#app>div,#app>div>main,.main-section,.main-section>div{
  height: 100%;
}
.el-card__header{
  padding: 10px 20px;
}
.el-card.box-card,
.el-card__body {
        min-width: 950px;
    }
.el-message-box__content{
  padding: 20px 15px
}
// 图片预览置顶
.pswp--open {
    z-index: 2600;
}
// 表格子数据滚动条隐藏
td>.el-table--scrollable-x .el-table__body-wrapper {
    overflow-x: hidden;
}
</style>

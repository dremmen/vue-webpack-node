<template>
  <div class="container">
    <el-menu :router="true" :default-active="active" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/list">分类</el-menu-item>
      <el-menu-item index="4" class="right">注册</el-menu-item>
      <el-menu-item index="3" class="right">登陆</el-menu-item>
    </el-menu>
  </div>


</template>

<script>
export default {

  name: 'Header',
  data() {
    return {
      active: '0'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="css" scoped>
  .container{
    padding: 0 10%;
    background: #eef1f6;
  }

  .right{
    float: right;
  }
</style>
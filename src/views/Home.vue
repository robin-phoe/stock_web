<template>
  <div class="home">
    <header>
      <div class="page-container header-item">
        <router-link v-for="item in getRoutes" :to="item.path" :key="item.path" class="item">
          {{item.name}}
        </router-link>
      </div>
      <div></div>
    </header>
    <div class="page-container main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  computed:{
    getRoutes(){
      return this.$router.options.routes[0].children
    }
  },
  mounted(){
    console.log(this.$router.options.routes)
  },
  methods: {
    clickFunc(){
      this.$baseLoading("哈哈哈")
    }
  }
}
</script>
<style lang="scss" scoped>
  header{
    
    height: 60px;
    line-height: 60px;
    background: rgb(182, 207, 238);
    .header-item{
      display: flex;
      .item {
        color: $app-main-font-color;
        font-size: 24px;
        margin-right: 20px;
        padding: 0 5px;
        cursor: pointer;
        &:hover{
          background: $menuHover;
          color: $menuBg;
        }
      }
    }
  }
  .main-container {
    margin-top: 10px;
    background: #fff;
  }
</style>

<template>
  <div class="info">
    <div>
      <div class="title">病毒信息</div>
    <p></p>
    </div>
      <div class="title">
        <img src="../../../assets/images/hot.png" width="60px" alt=""></div>
        <ul>
          <li v-for="item in news" :key='item.id'><span>最新</span>{{item.title}}</li>
        </ul>
      
      
  </div>
</template>

<script>
export default {
props: {
  covDesc: {
    type: Object,
    default: function(){
      return {}
    }
  },
  news: {
    type: Array,
    default: function(){
      return [];
    }
  }
}
}
</script>

<style lang="less" scoped>
.info{
    padding: 0.2rem;
    .title{
    margin: 0.2rem;
    padding-top: 0.2rem;
    margin-right: 0.1rem;
}
.title::before{
    content: '';
    border-right: 0.1rem solid rgb(9,60,202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
}
    p{
      line-height: o.5rem;
      color: #666;
    }
    li {
        line-height: 0.44rem;
        margin-bottom: 0.2rem;
        letter-spacing: 0.03rem;
        font-size: 0.3rem;
        color: #666;
          span {
        background: #ff5555;
        color: #fff;
        font-size: 0.26rem;
        padding: 0.02rem 0.06rem;
        margin-right: 0.02rem;
        border-radius: 0.06rem;
      }
      }
  
}
</style>
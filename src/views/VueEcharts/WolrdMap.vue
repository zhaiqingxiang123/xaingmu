<template>
<div>
    <div class="title">世界疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为echarts 准备一个定义了宽高的 DOM -->
   <div id="main1" style="width:7.5rem; height:7rem"></div>
  </div>
</template>

<script>
export default {
   mounted(){
    this.$myChart.wolrdMap('main1',[])
   }
}
</script>

<style lang="less" scoped>
.title{
    margin: 0.2rem;
    padding-top: 0.2rem;
    
}
.title::before{
    content: '';
    border-right: 0.1rem solid rgb(9,60,202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
}
#main{
    background: #f5f5f5;
}
</style>
<template>
  <div class="wuzi">
    <!-- 底部logo -->
    <img width="100%" src="../../assets/images/wuzi.png" alt="">
   <!-- 物资内容 -->
   <div class="wrapper">
    <van-tabs animated>
      <van-tab v-for="item in arr" :key="item.title" :title="item.title">
        <img width="100%" :src="item.img" alt="">
      </van-tab>
    </van-tabs>
   </div>
  </div>
</template>

<script>
import img1 from '../../assets/images/jiujing.png'
import img2 from '../../assets/images/kouzhao.png'
export default {
  data(){
    return{
      active: 1,
      arr:[
        {
          img:img1,
          title: '消毒剂'
        },
        {
          img:img2,
          title: '口罩'
        },
      ]
    }
  }
}
</script>

<style>
.wuzi{
  background: #3343ff;
}
.wrapper{
  background: #3343ff;
  padding: 0.2rem;
}
</style>
<template>
  <div class="selectCity">
    <div calss="title"><h2>城市选择</h2></div>
    <van-index-bar :index-list="indexList">
       <template v-for="(item,name) in citylist">
        <van-index-anchor :index="name" :key='name' />
        <van-cell :title="ele.name" v-for="ele in item" :key="ele.id" @click="tiao"/>
        <!-- <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" /> -->
       </template>
   </van-index-bar>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
    data(){
     return{
       citylist:{},
       indexList: [],
     }
    },
    methods:{
    tiao(event){
        console.log(event.target.innerText);
        localStorage.setItem('city',event.target.innerText)
        this.$router.go(-1);
    
    }
    },
  created() {
   api.getCity().then(res => {
    console.log(res.data);
    this.citylist = res.data.result.citylist
    this.indexList = Object.keys(res.data.result.citylist)
   })

  }
}
</script>

<style lang="less" scoped>
.selectCity{
    padding: 0.2rem;
    
        .title{
          margin-bottom: 0.1rem;
        }
  
}
</style>
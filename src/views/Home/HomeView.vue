<template>
  <div class="home">
  <div class="logo">
     <img src="../../assets/images/1.jpg" width="100%" alt="">
 <router-link class="select" to="/SelectCity">{{city}}</router-link>
 </div>
   
  <!-- 病毒信息 -->
   <CovInfo :covDesc="covDesc" :news="news"/>
   <!-- 疫情导航 -->
   <div class="list">
    <div class="he">
    <router-link to="/area">
        <img src="../../assets/images/1.png" alt="">
      <div>风险地区</div>
    </router-link>
    </div>
    <div class="he">
      <router-link to="/hesuan">
      <img src="../../assets/images/2.png" alt="">
      <div>核算检测</div>
      </router-link>
    </div>
    <div class="he">
    <router-link to="/fangyi">
      <img src="../../assets/images/3.png" alt="">
      <div>防疫物资</div>
    </router-link>
    </div>
    <div class="he">
      <router-link to="travel">
      <img src="../../assets/images/4.png" alt="">
      <div>出行政策</div>
      </router-link>
    </div>
   </div>
   <!-- 疫情热点 -->
   <CovNumber :covData='covData'/>
   <!-- 中国地图 -->
   <ChinaMap/>
   <!-- 世界地图 -->
   <WolrdMap/>
   <!-- 轮播图 -->
   <VueSwiper/>
  </div>

</template>

<script>
// @ is an alias to /src
import CovInfo from './CovInfo/index'
import CovNumber from './CovInfo/CovNumber'
import ChinaMap from '../VueEcharts/ChinaMap'
import WolrdMap from '../VueEcharts/WolrdMap'
import VueSwiper from './VueSwiper/VueSwiper'
import api from '../../api/index'
export default {
  name: 'HomeView',
  data(){
    return{
      city: '国内疫情',
      covDesc:{},
      news:[],
      covData:{}
    }
  },
  components: {
   CovInfo,
   CovNumber,
   ChinaMap,
   WolrdMap,
   VueSwiper
  },
  created(){
    // 进入页面获取本地存储
    let city = localStorage.getItem('city')
    if(city){
      this.city = city+'疫情'
    }
    //请求病毒接口
    api.getCovInfo().then(res => {
      console.log(res.data);
      console.log(res.data.newslist[0]);
      //病毒介绍信息
      let data = res.data.newslist[0].desc;
      this.covDesc = {
        note1: data.note1,
        note2: data.note2,
        note3: data.note3,
        remacrk1: data.remacrk1,
        remacrk2: data.remacrk2,
        remacrk3: data.remacrk3,
      }
      //疫情热点
      this.news = res.data.newslist[0].news;
     //全国疫情数据
     this.covData = {
      currentConfirmedCount: data.currentConfirmedCount,
      confirmedCount: data.confirmedCount,
      suspectedCount: data.suspectedCount,
      curedCount: data.curedCount,
      deadCount: data.deadCount,
      seriousCount: data.seriousCount,
      suspectedIncr: data.suspectedIncr,
      currentConfirmedIncr: data.currentConfirmedIncr,
      confirmedIncr: data.confirmedIncr,
      cureIncr: data.cureIncr,
      deadIncr: data.deadIncr,
      seriousIncr: data.seriousIncr,
      modifyTime: data.modifyTime
     }
    })
  }
} 
</script>
<style lang="less" scoped>
.list {
  display: flex;
  text-align: center;
  .he{
   margin: 0.4rem;
  }
  img{
    width: 1rem;
    height: 1rem;
  }
}
.logo{
  position: relative;
  .select{
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    color: rgba(23, 9, 9, 0.97);
    font-size: 0.3rem;
    
  }
}
</style>
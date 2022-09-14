<template>
 <div>
   <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in banner" :key='item.title'>
        <img :src="item.image" alt="" width="100%">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 轮播的图片按钮 -->
    <ul class="list">
        <li  
        v-for="(item,index) in banner" 
        :key='item.title'
        :class="{active: index==num}"
        @click="changeSwiper(index)"
        >
        {{item.title}}
        </li>
    </ul>
 </div>
</template>

<script>
import api from '../../../api/index'
export default {
    data(){
        let that = this;
        return{
            num: 0,
            arr: [1,2,3,4,5],
            banner: [],
            swiperOption:{
                 pagination: {
                    el: ".swiper-pagination"
                 },
                 autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                 },
                 loop: true,
                on: {
                    slideChangeTransitionStart: function(){
                    console.log(this.activeIndex);
                    if(this.activeIndex == that.arr.length+1){
                        that.num = 0;
                    }else{
                        that.num = this.activeIndex-1
                    }
                    
        },
         },
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        api.getSwiperBanner().then(res=>{
            console.log(res.data);
            this.banner = res.data.result;
        })
    },
    methods: {
    changeSwiper(index) {
      //高亮选中
      this.num = index;
      //让swiper切换
      this.swiper.slideTo(index + 1, 1000, false);
      }
    }
}
</script>

<style lang="less" scoped>
.list{
    display: flex;
    li{
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    background: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
 
    }
    .active{
        background: rgba(40, 19, 231, 0.874);
        color: #fff;
    }
}
</style>
<template>
  <div>
    <div class="title">疫情期间出行防疫</div>
    <van-field
      v-model="goCity"
      is-link
      readonly
      label="出发地区"
      placeholder="请选择所在地区"
      @click="show = true"
    />
  <van-popup v-model="show" round position="bottom">
    <van-cascader
      v-model="cascaderValue"
      title="请选择出发城市"
      :options="options"
      @close="show = false"
      @finish="onFinish"
    />
  </van-popup>

      <van-field
      v-model="toCity"
      is-link
      readonly
      label="到达地区"
      placeholder="请选择所在地区"
      @click="show2 = true"
    />
  <van-popup v-model="show2" round position="bottom">
    <van-cascader
      v-model="cascaderValue2"
      title="请选择出发城市"
      :options="options"
      @close="show2 = false"
      @finish="toFinish"
    />
  </van-popup>
   <div class="but"><van-button type="primary" size="large" @click="search">查询</van-button></div>
  
  <!-- 政策查询结果 -->
  <div class="content">
    <div>出发城市：</div>
    <div>到达城市：</div>
  </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
 data() {
    return {
      show: false,
      show2: false,
      goCity: '',
      toCity: '',
      from : '',
      to: '',
      cascaderValue: '',
      cascaderValue2: '',
      from_info: '',
      to_info: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({value, selectedOptions,tabIndex }) {
      this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join('/');
    },
     toFinish({ value, selectedOptions,tabIndex  }) {
      this.to = value
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join('/');
    },
     search(){
    console.log('chax');
    api.getTravelQuery({
      from: this.from,
      to: this.to
    })
    .then(res => {
      console.log(res.data);
       this.from_info = res.data.result.from_info;
       this.to_info = res.data.result.to_info;
    })
  },
  },
 
  created(){
    api.getTravel()
    .then(res=>{
      console.log(res.data.result);
      let result = res.data.result;
      let arr =[]
      result.forEach(item=> {
        let obj = {}
        obj.text = item.province
        obj.value = item.province_id
        obj.children = [];
        item.citys.forEach(ele => {
           let child={}
           child.tetx = ele.city
           child.value =ele.city_id
           obj.children.push(child)
        })
        arr.push(obj)
      });
      this.options = arr;
    })
  }
}
</script>

<style lang="less" scoped>
.title{
  padding: 0.2rem;
}
.but{
   margin: 0.2rem;
}
</style>
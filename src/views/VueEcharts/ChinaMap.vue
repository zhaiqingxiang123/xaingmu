<template>
  <div>
    <div class="title">国内疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为echarts 准备一个定义了宽高的 DOM -->
   <div id="main" style="width: 7.5rem; height:7rem"></div>
  </div>
</template>

<script>
// import echarts from 'echarts';
import api from '../../api/index'
export default {
mounted(){
  // api.getChinaData().then(res =>{
  //   console.log('---',res.data);
  // })
    this.$myChart.chinaMap('main',[ {name:'内蒙古',value: 200},]);
// // 基于准备好的dom，初始化echarts实例
// var myChart = this.$echarts.init(document.getElementById('main'));
// // 绘制图表
// // myChart.setOption( {
// //   title: {
// //     text: 'ECharts 入门示例'
// //   },
// //   tooltip: {},
// //   legend: {
// //    data:["销量"]
// //   },
// //   xAxis: {
// //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
// //   },
// //   yAxis: {},
// //   series: [
// //     {
// //       name: '销量',
// //       type: 'line',
// //       data: [5, 20, 36, 10, 10, 20]
// //     }
// //   ]
// // });
// //绘制中国地图
// myChart.setOption( {
// //  
//   tooltip: {
//     triggerOn: 'click',
//     enterable: true,
//     fromatter(item) {
//         return item.name
//     }
//     // formatter: '{a}-{b}'
//   },
//   visualMap: [{
//     orient: "horizontal",
//     type: "piecewise",
//     bottom: 0,
//     pieces: [
//         {
//             min: 0,
//             max: 0,
//             color: "#FFFFFF"
//         },
//         {
//             min: 1,
//             max: 100,
//             color: "#FDFDCF"
//         },
//         {
//             min: 100,
//             max: 1000,
//             color: "#FE9E83"
//         },{
//             min: 1000,
//             max: 5000,
//             color: "#E55A4E"
//         },
//         {
//             min: 5000,
//             // max: 0,
//             color: "#4F070D"
//         },
//     ]
//   }],
//   series: [
//     {
//       name: '省份',
//       type: 'map',
//       map: "china",
//       roam: false,
//       zoom: 1.2,
//       aspectScale: 0.75,
//       top: 40,
//       layoutCenter: ['5%','5%'],
//       label: {
//         normal: {
//             show: true,
//             textStyle: {
//                 fontSize: 8
//             }
//         }
//       },
//       itemStyle: {
//         normal: {
//         areaColor: 'rgba(0,255,236,0)',
//         boderColor: 'rgba(0,0,0,0.2)'
//         },
//         emphasis: {
//         areaColor: 'rgba(255,180,0,0.8)',
//         shadowOffsetX: 0,
//         shadowOffsetY: 0,
//         shadowBlur: 20,
//         borderWidth: 0,
//       }
//       },
//       data: data
//     //    data: [
//     //     {name:'内蒙古',value: 200},
//     //     {name:'北京',value: 800},
//     // ]
//     }]
// });
}
}

</script>

<style lang="less" scoped>
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
#main{
    background: #f5f5f5;
}
</style>
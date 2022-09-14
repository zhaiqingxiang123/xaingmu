// 开发成vue插件使用echarts
//导入echarts
import echarts from 'echarts';

import 'echarts/map/js/china'
import country from '../utils/country';
import 'echarts/map/js/world'
const install = function(Vue) {
    //添加实例方法
    // Vue.prototype.demo = function(){}
    Object.defineProperties(Vue.prototype,{
        $myChart:{
            get(){
                return{
                     // 绘制图表
                    line(id){
                        var myChart = echarts.init(document.getElementById(id));
                        // // 绘制图表
                        myChart.setOption( {
                          title: {
                            text: 'ECharts 入门示例'
                          },
                          tooltip: {},
                          legend: {
                           data:["销量"]
                          },
                          xAxis: {
                            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                          },
                          yAxis: {},
                          series: [
                            {
                              name: '销量',
                              type: 'line',
                              data: [5, 20, 36, 10, 10, 20]
                            }
                          ]
                        });
                    },
                 //绘制中国地图
                   chinaMap(id,data){
                    var myChart = echarts.init(document.getElementById(id));
                  
                            myChart.setOption({ 
                            tooltip: {
                                triggerOn: 'click',
                                enterable: true,
                                fromatter(item) {
                                    return '<a href="#/citys">省份：'+item.name+'--详情</a>'
                                }
                                // formatter: '{a}-{b}'
                            },
                            visualMap: [{
                                orient: "horizontal",
                                type: "piecewise",
                                bottom: 0,
                                pieces: [
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#FE9E83"
                                    },{
                                        min: 1000,
                                        max: 5000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 5000,
                                        // max: 0,
                                        color: "#4F070D"
                                    },
                                ]
                            }],
                            series: [
                                {
                                name: '省份',
                                type: 'map',
                                map: "china",
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%','5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                    areaColor: 'rgba(0,255,236,0)',
                                    boderColor: 'rgba(0,0,0,0.2)'
                                    },
                                    emphasis: {
                                    areaColor: 'rgba(255,180,0,0.8)',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowBlur: 20,
                                    borderWidth: 0,
                                }
                                },
                                data
                                //    data: [
                                //     {name:'内蒙古',value: 200},
                                //     {name:'北京',value: 800},
                                // ]
                                }]
                            });
                   },
                 // 世界地图
                   wolrdMap(id,data){
                    var myChart = echarts.init(document.getElementById(id));
                  
                    myChart.setOption({ 
                    tooltip: {
                        triggerOn: 'click',
                        enterable: true,
                        fromatter(item) {
                            return item.name + ': 确诊人数'+ item.value
                        }
                    },
                    visualMap: [{
                        orient: "vertical",
                        type: "piecewise",
                        bottom: 0,
                        pieces: [
                            {
                                min: 0,
                                max: 0,
                                color: "#FFFFFF"
                            },
                            {
                                min: 1,
                                max: 100,
                                color: "#FDFDCF"
                            },
                            {
                                min: 100,
                                max: 1000,
                                color: "#FE9E83"
                            },{
                                min: 1000,
                                max: 5000,
                                color: "#E55A4E"
                            },
                            {
                                min: 5000,
                                max: 10000,
                                color: "#4F070D"
                            },
                            {
                                min: 10000,
                                // max: 10000,
                                color: "#4F070f" 
                            }
                        ]
                    }],
                    series: [
                        {
                        name: '国',
                        type: 'map',
                        map: "world",
                        nameMap: country,
                        roam: false,
                        zoom: 1.2,
                        aspectScale: 0.75,
                        top: 40,
                        layoutCenter: ['5%','5%'],
                        label: {
                            normal: {
                                show: false,
                                textStyle: {
                                    fontSize: 8
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                            areaColor: 'rgba(0,255,236,0)',
                            boderColor: 'rgba(0,0,0,0.2)'
                            },
                            emphasis: {
                            areaColor: 'rgba(255,180,0,0.8)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                        }
                        },
                        data
                        }]
                    });
                   }
                }
            }
        }
    })
}
export default install
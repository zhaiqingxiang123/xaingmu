// 请求接口的方法
//请求axios
import axios from "axios";
//接口地址
import base from './base'


 const api = {
  //病毒信息获取
   getCovInfo(){
    return axios.get(base.host + base.conInfo)
   },
 //获取国内yiqing
  getChinaData(){
    return axios.get(base.baseUrl + base.chinaData)
  },
  getSwiperBanner(){
    return axios.get( base.swiperBanner)
  },
  getTravel() {
    return axios.get( base.travel)
  },
  getTravelQuery(params){
    return axios.get(base.travelQuery,{
      params
    })
  },
  getCity(){
    return axios.get(base.getcity)
}
 }
 export default api;
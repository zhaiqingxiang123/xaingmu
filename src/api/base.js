//公告接口

const base = {
    host: 'https://api.tianapi.com',//天行数据 -- 疫情病毒
    baseUrl:'https://yupn.api.storeapi.net',//挖数据---国内疫情
    conInfo: '/ncov/index?key=b5919dd6f573907e378d0a6be7a78ff3',//疫情病毒信息
    // city:'/api/94/221',//城市接口
    chinaData:'/api/94/219?format=json&appid=6938&sign=687569b1fd450f3491cd6e72f82aacf7',//国内疫情接口
    swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
    travel:'/api/springTravel/citys?key=171e165a7d991c5f6ecd5194c54778ef',
    travelQuery: '/api/springTravel/query?key=171e165a7d991c5f6ecd5194c54778ef',
    getcity:'/foo/aj/getcitycode',
}  
export default base;
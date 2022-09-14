const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //配置参数
/**
 * devServer.proxy 
 * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请 求代理到 API 服务器
 */

  devServer: {
      proxy: {
          '/api': {
              target: 'http://apis.juhe.cn',//聚合接口地址
              ws: true,
              changeOrigin: true,
              pathRewrite:{//重写路径
                  '^/api':''
              }
          },
          // 360接口
          '/foo': {
            target: 'https://bang.360.cn',//
            ws: true,
            changeOrigin: true,
            pathRewrite:{//重写路径
                '^/foo':''
            }
        }
      },
  }

}

)

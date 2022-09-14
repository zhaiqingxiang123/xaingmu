<template>
  <div class="num">
    <div class="content">
      <div class="title">截至{{ covData.modifyTime | time }}全国数据统计</div>
      <ul class="wrap">
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.currentConfirmedIncr | number }}
          </div>
          <div class="bold">{{ covData.currentConfirmedCount |division}}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.suspectedIncr | number }}
          </div>
          <div class="bold">{{ covData.suspectedCount |division }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.seriousIncr | number }}
          </div>
          <div class="bold">{{ covData.seriousCount |division }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.confirmedIncr | number }}
          </div>
          <div class="bold">{{ covData.confirmedCount | division}}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span> {{ covData.deadIncr | number }}
          </div>
          <div class="bold">{{ covData.deadCount | division}}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span> {{ covData.curedIncr | number }}
          </div>
          <div class="bold">{{ covData.curedCount | division }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["covData"],
  //定义过滤器
  filters: {
    //数字>0 补+
    number: function (val) {
      val = val > 0 ? "+" + val : val;
      if (val == 0) {
        return "";
      }
      return val;
    },
    //处理时间格式--- js:年月日
    time: function (time) {
      time = new Date().toLocaleString("chinese", { hour12: false });
      return time;
      //手动获取：
      // var y = data.getFullYear();
      // var m = data.getMonth()+1;
      // var d = data.getDate();
      // return y+'-'+m+'-'+d;
    },
    //js 中数字加逗号处理(每三位加逗号)
    division: function (num) {
      if (num == undefined) return "";
      // console.log('num---',num);
      //方式1：
      // console.log('格式---',num.toLocaleString());
      return num.toLocaleString();
      //方式2：正则处理
    //   return num.toString().replace(/\d+/, function (n) {
    //     return n.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    //   });
    },
  },
};
</script>

<style lang='less' scoped>
.num {
  background: #f5f5f5;
  padding-top: 0.3rem;
  .content {
    background: #fff;
    padding: 0.3rem;
    min-height: 2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title {
      color: #666;
      margin-bottom: 0.2rem;
    }
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.2rem;
    border-radius: 0.1rem;
    box-shadow: 0 0 3px 2px rgba(194, 192, 192, 0.2);
    li {
      width: 33.33333%;
      text-align: center;
      margin-bottom: 0.24rem;
      position: relative;
      font-size: 0.24rem;
      .number {
        span {
          color: #777;
          font-weight: bold;
        }
      }
      strong {
        color: #333;
      }
    }
    // 1 2  3-  4 5 6-
    li::after {
      content: "";
      display: block;
      position: absolute;
      right: 1px;
      top: 0.2rem;
      height: 0.8rem;
      border-right: 1px solid #eee;
    }
    li:nth-child(3n)::after {
      content: "";
      border-right: 0;
    }
    .bold {
      font-weight: bold;
      font-size: 0.36rem;
    }
    li:nth-child(1) {
      color: red;
    }
    li:nth-child(2) {
      color: rgb(18, 143, 14);
    }
    li:nth-child(3) {
      color: orange;
    }
    li:nth-child(4) {
      color: rgb(189, 19, 98);
    }
    li:nth-child(5) {
      color: rgb(223, 208, 7);
    }
    li:nth-child(6) {
      color: rgb(8, 110, 194);
    }
  }
}
</style>
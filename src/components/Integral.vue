<template>
  <div class="container">
    <section class="user_top">
      <div class="userinfo">
        <div class="integral"><router-link to="/integral">积分说明</router-link></div>
        <p>当前积分</p>
        <p><span>{{integral}}</span>分</p>
        <p class="time">{{integral}}分将在2018年12月13日过期</p>
      </div>
      <ul class="my">
        <li>积分商城</li>
        <li class="line"></li>
        <li>赚取积分</li>
        <li class="line"></li>
        <li>兑换记录</li>
      </ul>
    </section>
    <section class="detail">
      <p class="detail_title"><span></span>积分明细<span></span></p>
      <ul class="detail_list">
        <li>
          <div>
            <p>关注</p>
            <p class="det_time">2017-11-20 09:17</p>
          </div>
          <div class="change">+20</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Footer from './common/footer.vue'

  export default {
    name: "BinDing",
    data () {
      return {
        integral: '20'
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  p{
    margin:0;
  }
  .container{
    background: #e5e5e5;
    min-height: 6rem;
    color: #666;
  }
  .user_top{
    background: #2fd574;
    color: #fff;
  }
  .userinfo{
    padding-top:.2rem;
  }
  .userinfo p{
    text-align: center;
    font-size: .14rem;
    margin-bottom: .1rem;
  }
  .userinfo p span{
    font-size: .24rem;
  }
  .integral{
    background: rgba(0,0,0,0.2);
    padding:.05rem .1rem;
    font-size: .1rem;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    position: absolute;
    top:.4rem;
    right:0;
  }
  .integral a{
    color: #fff;
    text-decoration: none;
  }
  .my{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0,0,0,0.2);
    padding:.08rem 0;
    font-size: .12rem;
    margin-top:.1rem;
  }
  .my li{
    width:49%;
    text-align: center;
  }
  .line{
    width:1px!important;
    height:.11rem;
    background: #fff;
    padding-top:.01rem;
  }
  .time{
    font-size: .1rem;
  }
  .detail{
    background: #fff;
    margin-top:.1rem;
  }
  .detail_title{
    text-align: center;
    padding:.07rem;
    border-bottom: 1px solid #efefef;
  }
  .detail_title span{
    display: inline-block;
    width:.15rem;
    height:1px;
    background: #666;
    margin:0 .03rem;
    vertical-align: middle;
    margin-top:-.04rem;
  }
  .detail_list li{
    display: flex;
    justify-content: space-between;
    padding:.06rem .1rem;
    color: #333;
    align-items: center;
  }
  .det_time{
    font-size: .1rem;
    color: #aaa;
  }
  .change{
    color: #f60;
  }
</style>

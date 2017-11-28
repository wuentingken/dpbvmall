<template>
  <div id="distribution">
    <loading-bar
      id="loading-bar-id"
      custom-class="custom-class"
      :on-error-done="errorDone"
      :on-progress-done="progressDone"
      :progress="progress"
      :direction="direction"
      :error="error" >
    </loading-bar>
    <!--轮播图-->
    <section class="device" id="device">
      <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-slide"> <img src="../assets/img/tx.jpg"> </div>
        </div>
      </div>
      <div class="pagination"></div>
    </section>
    <div class="price">
      <div class="pr_l">
        <p class="now_pr">￥<span>69.00</span></p>
        <p class="orde"><span class="yuan_price">70</span><span class="fan">可返1元</span></p>
      </div>
      <div class="pr_r">推广佣金：￥ <span>1</span></div>
    </div>
    <div class="p_j">
      <span class="tao"><img src="../assets/img/tx.jpg" alt=""></span>
      <span>韩梅梅skinfood思亲肤 唇颊两用鲜果三色彩妆盒唇膏腮红买一送一</span><br>
      <span class="ill">聚客通服务指南体验专用</span>
    </div>
    <section class="bot">
      <div class="b_rule">
        <p><i class="fa fa-question-circle-o" aria-hidden="true" style="font-size: .16rem"></i></p>
        <p class="text">活动规则</p>
      </div>
      <div class="b_rule">
        <p><i class="fa fa-hourglass-o" aria-hidden="true"></i></p>
        <p class="text">我的进程</p>
      </div>
      <router-link to="/sharewecord" class="btn_tui">立即推广</router-link>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './common/footer'
  import loadingBar from "vue2-loading-bar"
  import '../assets/css/loading-bar.css'

  export default {
    name: 'Distribution',
    data () {
      return {
        progress: 20,
        error: false,
        direction: 'right'
      }
    },
    components: {
      loadingBar,
      Footer
    },
    methods: {
      progressTo: function (val) {
        this.progress = val;
      },
      setToError: function (bol) {
        this.error = bol;
      },
      changeDirection: function (direction) {
        if(this.progress >= 0){
          this.progress = 100;
        }
        this.direction = this.direction === 'right' ? 'left' : 'right';
      },
      // Callback
      errorDone(){
        this.error = false
      },
      progressDone() {
        this.progress = 0
      },
    },
    mounted: function () {
      var me = this;
      me.progress = 10;
      for (var i = 0; i < 30; i++) {
        if(i > 20 && i < 29){
          setTimeout(function () {
            me.progress += 5;
          },50*i);
        }else{
          setTimeout(function () {
            me.progress ++;
          },10*i);
        }
      }
      setTimeout(function () {
        me.progress = 100;
      },1500);
    }
  }
</script>

<style scoped>
  #distribution{
    background: #f2f2f2;
  }
  p{
    margin:0;
  }
  /*轮播图样式*/
  .device {
    width: 100%;
    height: 3rem;
    position: relative;
  }.swiper-slide{
     height:3rem!important;
   }
  .swiper-wrapper{
    height:3rem!important;
  }
  .swiper-slide img{
    width: 100%;
    height:3rem;
  }
  .pagination {
    position: absolute;
    left: 0;
    text-align: center;
    bottom:25px;
    width: 100%;
    z-index: 99;
  }
  .price{
    background: #ff5000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.06rem;
    color: #fff;
  }
  .now_pr span{
    font-size: .2rem;
    font-family: 楷体;
  }
  .yuan_price{
    text-decoration: line-through;
    margin-right: .05rem;
  }
  .fan{
    display: inline-block;
    border: 1px solid #fff;
    border-radius:2px;
  }
  .pr_r span{
    font-size: .3rem;
    font-family: 楷体;
  }
  .orde{
    font-size: .1rem;
  }
  .tao{
    width:.13rem;
    display: inline-block;
  }
  .tao img{
    width:100%;
  }
  .p_j{
    padding:.03rem .12rem;
    color: #666;
    background: #fff;
    margin-bottom: 1rem;
  }
  .ill{
    font-size: .09rem;
    background: #ff5000;
    color: #fff;
    padding:.01rem;
    border-radius: 2px;
  }
  .bot{
    position: fixed;
    bottom:0;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#fff;
  }
  .b_rule{
    text-align: center;
  }
  .btn_tui{
    height:.44rem;
    background: #ff5000;
    line-height:.4rem;
    color: #fff;
    width:50%;
    text-align: center;
    text-decoration: none;
  }
  .b_rule:first-child{
    margin-left:.15rem;
  }
  .b_rule .fa{
    color: #ff5000;
    margin: .05rem 0;
  }
  .text{
    font-size: .1rem;
    color: #ccc;
    margin-bottom:.02rem;
  }
</style>



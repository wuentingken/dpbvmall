<template>
  <div id="sharewecord">
    <loading-bar
      id="loading-bar-id"
      custom-class="custom-class"
      :on-error-done="errorDone"
      :on-progress-done="progressDone"
      :progress="progress"
      :direction="direction"
      :error="error" >
    </loading-bar>
    <section class="top">
      <div class="store">
        <div class="store_img"><img src="../assets/img/tx.jpg" alt=""></div>
        <div>
          <p class="name">聚客通服务指南</p>
          <p><i class="fa fa-qrcode" aria-hidden="true"></i></p>
        </div>
      </div>
    </section>
    <section>
      <ul class="goodlist">
        <li>
          <div class="good_img"><img src="../assets/img/tx.jpg" alt=""></div>
          <div class="good_info">
            <p class="good_name">【到手价89元】HMM韩梅梅韩国代购岁月维护皇家BB霜 保湿遮瑕细腻有光泽</p>
            <div class="q_percent">
              <div class="line"></div>
              <div class="percent">已抢0%</div>
            </div>
            <span class="surplus">剩余1件</span>
            <p class="join">已有<span>0</span>人参加</p>
            <div class="qing">
              <div class="q_money">
                <span class="x_price">￥94</span>
                <span class="q_fan">返</span>
                <span class="f_money">￥5</span>
              </div>
              <div class="q_btn">立即抢</div>
            </div>
          </div>
        </li>
        <li>
          <div class="good_img"><img src="../assets/img/tx.jpg" alt=""></div>
          <div class="good_info">
            <p class="good_name">【到手价89元】HMM韩梅梅韩国代购岁月维护皇家BB霜 保湿遮瑕细腻有光泽</p>
            <div class="q_percent">
              <div class="line"></div>
              <div class="percent">已抢0%</div>
            </div>
            <span class="surplus">剩余1件</span>
            <p class="join">已有<span>0</span>人参加</p>
            <div class="qing">
              <div class="q_money">
                <span class="x_price">￥94</span>
                <span class="q_fan">返</span>
                <span class="f_money">￥5</span>
              </div>
              <div class="q_btn">立即抢</div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="bott">
      <div class="shou">
        <p class="home"><i class="fa fa-home" aria-hidden="true"></i></p>
        <p>返利商城</p>
      </div>
      <div>
        <router-link to="/myfan">
          <p class="home"><i class="fa fa-user" aria-hidden="true"></i></p>
          <p>我的返利</p>
        </router-link>
      </div>
      <div>
        <router-link to="/usercenter">
          <p class="home"><i class="fa fa-th-large" aria-hidden="true"></i></p>
          <p>更多活动</p>
        </router-link>
      </div>
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
  .top{
    background: url("") no-repeat;
    background-size: 100% auto;
    height:.9rem;
    margin-bottom: .1rem;
  }
  .store{
    display: flex;
    align-items: center;
    width:100%;
    height:100%;
    color: #fff;
    background: rgba(0,0,0,0.1);
  }
  .store_img{
    width:.6rem;
    margin:0 .1rem 0 .2rem;
  }
  .store_img img{
    width: 100%;
    border-radius: 50%;
  }
  .store .fa{
    font-size:.18rem;
    margin-top:.04rem;
  }
  .goodlist{
    min-height:4.5rem;
    margin-bottom:.2rem;
  }
  .goodlist li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding:.1rem .1rem 0 0;
  }
  .good_img{
    width:2rem;
    margin-right:.12rem;
  }
  .good_img img{
    width:100%;
  }
  .good_info{
    border-bottom:1px solid #efefef;
  }
  .good_name{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    font-size:.1rem;
  }
  .q_percent{
    display: inline-block;
    width:1.4rem;
    border:1px solid #ff4444;
    border-radius: 20px;
    font-size: .09rem;
    color: #ff4444;
    height:.13rem;
    margin:.06rem 0;
  }
  .line{
    display: inline-block;
    height:100%;
    width:.1rem;
    background: #ff4444;
    border-radius:50%
  }
  .percent{
    display: inline-block;
    padding-left:.08rem;
  }
  .surplus{
    color: #ccc;
    font-size:.1rem;
  }
  .join{
    font-size:.1rem;
  }
  .join span{
    color: #ff4444;
  }
  .qing{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .1rem;
  }
  .x_price{
    font-weight:700;
  }
  .q_fan{
    display: inline-block;
    padding:.01rem .02rem;
    background: #ff4444;
    color: #fff;
    font-size:.09rem;
    border-radius:4px
  }
  .f_money{
    color: #ff4444;
  }
  .q_btn{
    padding: .03rem .12rem;
    background: #ff4444;
    color: #fff;
    border-radius: 4px;
  }
  .bott{
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    background: #fff;
    width:100%;
    border-top: 1px solid #efefef;
    font-size: .1rem;
  }
  .shou{
    color: #ff4444;
  }
  .bott>div{
    padding:.05rem 0;
  }
  .bott>div:first-child{
    margin-left:.3rem;
  }
  .bott>div:last-child{
    margin-right:.3rem;
  }
  .home{
    text-align: center;
    font-size: .16rem;
  }
  .bott>div>a{
    color: #999;
    text-decoration: none;
  }
</style>



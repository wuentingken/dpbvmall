<template>
  <div class="container">
    <section id="signdone">
      <div class="total">累计积分<br><span>{{total}}</span></div>
      <p><router-link to="/" class="go">积分兑换</router-link></p>
      <p class="continuity">已连续签到<span>{{daynum}}</span>天</p>
      <ul class="goods_list">
        <li>
          <div class="good_img">
            <img src="../assets/img/mai.jpg" alt="">
            <p class="good_name">连续签到1天可以领取</p>
          </div>
          <div class="btn_qu"><span class="btnqu active">待领取</span></div>
        </li>
        <li>
          <div class="good_img">
            <img src="../assets/img/mai.jpg" alt="">
            <p class="good_name">连续签到1天可以领取</p>
          </div>
          <div class="btn_qu"><span class="btnqu">待领取</span></div>
        </li>
        <li>
          <div class="good_img">
            <img src="../assets/img/mai.jpg" alt="">
            <p class="good_name">连续签到1天可以领取</p>
          </div>
          <div class="btn_qu"><span class="btnqu">待领取</span></div>
        </li>
      </ul>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './common/footer.vue'

  export default {
    name: "Sign",
    components: {
      Footer
    },
    data() {
      return {
        total: '40',
        daynum: '0'
      }
    }
  }
</script>

<style scoped>
  #signdone{
    background: #19d77a;
    padding-top:.2rem;
  }
  p{
    text-align: center;
    margin:0;
  }
  .total{
    width: 70%;
    height:.8rem;
    background: #ab31ff;
    color: #fff800;
    margin:0 auto;
    border-radius:4px;
    font-size: .16rem;
    font-weight: 500;
    text-align: center;
    padding-top:.2rem;
    margin-bottom: .15rem;
  }
  .total span{
    font-size: .22rem;
  }
  .go{
    color: #563933;
    padding:.03rem .12rem;
    border-radius:50px;
    text-decoration: none;
    background: #fff800;
    font-weight: 700;
  }
  .continuity{
    color: #563933;
    margin-top:.2rem;
  }
  .continuity span{
    color: #fff800;
    padding:0 .05rem;
  }
  .link a{
    color: #fff;
    text-decoration: underline;
  }
  .goods_list{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top:.15rem;
  }
  .goods_list li{
    width:46%;
  }
  .good_img img{
    width:100%;
  }
  .good_img{
    margin:0 0 .1rem .21rem;
    border:1px solid rgba(0,0,0,0.2);
  }
  .good_name{
    font-size: .09rem;
    color: #fff800;
    padding:.03rem 0;
    text-align: center;
  }
  .btn_qu{
    padding-left:.2rem;
    text-align: center;
    margin-bottom: .2rem;
  }
  .btnqu{
    padding:.03rem .14rem;
    background: #fffc88;
    border-radius: 20px;
    color: #866f6b;
    font-weight: 700;
  }
  .btnqu.active{
    background: #ddd;
    color: #9a9a9a;
  }
</style>

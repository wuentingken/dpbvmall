<template>
  <div class="container">
    <section id="sign">
      <p class="yourintegral">当前累计积分<span>{{yourintegral}}</span>积分</p>
      <p><router-link to="/" class="go">兑换</router-link></p>
      <p class="continuity">已连续签到<span>{{daynum}}</span>天</p>
      <router-link to="/signdone" class="sign_btn">点击签到</router-link>
      <div class="link">
        <p><a id="rule">活动规则</a></p>
        <p><router-link to="/user">我的活动</router-link></p>
      </div>
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
        yourintegral: '20',
        daynum: '0'
      }
    }
  }
</script>

<style scoped>
  #sign{
    padding-top:3rem;
    background: #19d77a;
  }
  p{
    text-align: center;
  }
  .yourintegral{
    font-size: .16rem;
    font-weight: 700;
    color: #563933;
  }
  .yourintegral span{
    color: #fe4521;
    padding: 0 .05rem;
  }
  .go{
    color: #fff800;
    border:1px solid #fff800;
    padding:0 .1rem;
    border-radius:50px;
    text-decoration: none;
  }
  .continuity{
    color: #563933;
    margin-top:.3rem;
  }
  .continuity span{
    color: #fff800;
    padding:0 .05rem;
  }
  .sign_btn{
    display: block;
    background: #fff800;
    font-size: .18rem;
    width:90%;
    border-radius:50px;
    height:.4rem;
    line-height: .4rem;
    text-align: center;
    font-weight: 700;
    margin:0 auto .2rem auto;
    color: #563933;
    text-decoration: none;
  }
  .link{
    display: flex;
    justify-content: space-between;
    padding:.05rem 1rem;
  }
  .link a{
    color: #fff;
    text-decoration: underline;
  }
</style>

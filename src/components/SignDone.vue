<template>
  <div class="container">
    <section id="signdone">
      <div class="total">累计积分<br><span>{{total}}</span></div>
      <p><router-link to="/" class="go">积分兑换</router-link></p>
      <p class="continuity">已连续签到<span>{{daynum}}</span>天</p>
      <ul class="goods_list">
        <li v-for="(item,index) in goods" :class="{'active':index%2!=1}">
          <p class="good_img"><img src="../assets/img/mai.jpg" alt=""></p>
          <p class="good_name"><span class="tag">{{item.tag}}</span>{{item.good_name}}</p>
          <p class="use">{{item.good_use}}</p>
          <p class="money">价值{{item.good_money}}元</p>
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
</style>

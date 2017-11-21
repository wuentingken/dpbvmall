<template>
  <div class="container">
    <section class="idtype">
      <p>账号类型</p>
      <p>天猫/淘宝</p>
      <p id="tab"><i class="fa fa-chevron-down" aria-hidden="true"></i></p>
    </section>
    <section class="write">
      <div v-if="tao">
        <ul class="rame">
          <li style="border-bottom: 1px solid #e5e5e5">
            <p class="left_n">账号名称</p>
            <p><input type="text" class="input" placeholder="请输入您的淘宝会员名"></p>
          </li>
          <li>
            <p class="left_n">手机号</p>
            <p><input type="text" class="input" placeholder="请输入您的手机号"></p>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul class="rame">
          <li>
            <p class="left_n">手机号</p>
            <p><input type="text" class="input" placeholder="请输入您的手机号"></p>
          </li>
        </ul>
      </div>
    </section>
    <div class="confirm">确认绑定</div>
    <p class="agreement">点击“确认绑定”即表示您同意<a href="javascript:;">《用户绑定协议》</a></p>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './common/footer.vue'

  export default {
    name: "BinDing",
    components: {
      Footer
    },
    data () {
      return {
        tao: "true"
      }
    }
  }
</script>

<style scoped>
  .container{
    background: #e5e5e5;
    padding-top:.2rem;
  }
  .idtype{
    padding:0 .2rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    font-size: .14rem;
  }
  #tab{
    padding-right:.2rem;
  }
  .write{
    background: #fff;
    margin:.1rem 0 .4rem 0;
  }
  .rame li{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left_n{
    width:1rem;
    text-align: center;
  }
  .rame .input{
    width:2.1rem;
    border:none;
    font-size: .15rem;
  }
  .container p{
    margin:.1rem 0;
    color: #666;
  }
  .confirm{
    background: #2dcc70;
    color:#fff;
    width:2.4rem;
    height:.3rem;
    text-align: center;
    line-height: .3rem;
    margin:.12rem auto;
    border-radius: 50px;
    font-size: .15rem;
  }
  .agreement{
    text-align: center;
    font-size: .09rem;
    color: #aaa!important;
    margin-bottom: 3rem!important;
  }
  .agreement a{
    color: #439ae9;
    text-decoration: none;
  }
</style>

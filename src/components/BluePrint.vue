<template>
  <div id="blueprint">
    <loading-bar
      id="loading-bar-id"
      custom-class="custom-class"
      :on-error-done="errorDone"
      :on-progress-done="progressDone"
      :progress="progress"
      :direction="direction"
      :error="error" >
    </loading-bar>
    <section class="banner">
      <div class="rule">活动规则</div>
    </section>
    <section class="step">
      <div class="s1_xu">
        <div class="s1">step1</div>
      </div>
      <div class="ordernum">
        <p class="ordername">购物订单号</p>
        <p><input type="text" class="input"></p>
      </div>
    </section>
    <section class="step">
      <div class="s1_xu">
        <div class="s1">step2</div>
      </div>
      <div class="maipicture">
        <div>
          <div class="maiimg"><div class="li">例</div><img src="../assets/img/blueprint.jpg" alt=""></div>
          <div class="chace">
            <span class="chace_btn"><i class="fa fa-plus" aria-hidden="true"></i>评价截图</span>
            <input type="file" class="photo">
          </div>
        </div>
        <div>
          <div class="maiimg"><div class="li">例</div><img src="../assets/img/blueprint.jpg" alt=""></div>
          <div class="chace">
            <span class="chace_btn"><i class="fa fa-plus" aria-hidden="true"></i>买家秀1</span>
            <input type="file" class="photo">
          </div>
        </div>
        <div>
          <div class="maiimg"><div class="li">例</div><img src="../assets/img/blueprint.jpg" alt=""></div>
          <div class="chace">
            <span class="chace_btn"><i class="fa fa-plus" aria-hidden="true"></i>买家秀2</span>
            <input type="file" class="photo">
          </div>
        </div>
      </div>
      <div class="sub">立即提交</div>
      <p class="action"><a href="javascript:;">我的活动</a></p>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './common/footer'
  import loadingBar from "vue2-loading-bar"
  import '../assets/css/loading-bar.css'

  export default {
    name: 'BluePrint',
    data(){
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
    methods:{
      progressTo: function (val) {
        this.progress = val;
      },
      errorDone(){
        this.error = false
      },
      progressDone() {

      }
    }
  }
</script>



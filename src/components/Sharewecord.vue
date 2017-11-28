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
    <div class="share"><img src="../assets/img/tx.jpg" alt=""></div>
    <p class="text">长按分享或保存专属二维码</p>
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
  p{
    margin:0;
  }
  .share{
    width: 90%;
    margin:.5rem auto .1rem auto;
  }
  .share img{
    border-radius: 4px;
    width:100%
  }
  .text{
    text-align: center;
    font-size: .16rem;
    color: #666;
    margin-bottom: 1.8rem;
  }
</style>



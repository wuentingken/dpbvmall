<template>
  <div id="setting">
    <loading-bar
      id="loading-bar-id"
      custom-class="custom-class"
      :on-error-done="errorDone"
      :on-progress-done="progressDone"
      :progress="progress"
      :direction="direction"
      :error="error" >
    </loading-bar>
    <section class="set">
      <ul>
        <li>
          <router-link to="/shouaddress">
            <p>收货地址</p>
            <p><i class="fa fa-angle-right" aria-hidden="true"></i></p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <p>意见反馈</p>
            <p><i class="fa fa-angle-right" aria-hidden="true"></i></p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
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
      loadingBar
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
  ul{
    margin-top:.1rem;
  }
  ul li{
    border-bottom: 1px solid #efefef;
    background: #fff;
    padding:.08rem .1rem;
  }
  ul li:last-child{
    border-bottom:none;
  }
  ul li a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #555;
    text-decoration: none;
  }
</style>



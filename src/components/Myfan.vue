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
    <div class="classify">
      <router-link to="" class="active">全部</router-link>
      <router-link to="">待购买</router-link>
      <router-link to="">待返利</router-link>
      <router-link to="">已返利</router-link>
      <router-link to="">返利失败</router-link>
    </div>
    <router-view></router-view>

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
.classify{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:.35rem;
  background: #fff;
}
.classify a{
  display: block;
  height:.35rem;
  color: #333;
  text-decoration: none;
  line-height: .35rem;
  font-size: .12rem;
}
.classify a.active{
  line-height:.37rem;
  color: #ff4444;
  border-bottom:2px solid #ff4444;
}
</style>



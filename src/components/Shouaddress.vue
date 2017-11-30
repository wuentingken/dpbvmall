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
    <ul class="addresslist">
      <li>
        <p class="useraddress">成都市</p>
        <div class="uerinfo">
          <p class="u_info">吴&nbsp;&nbsp;13551344721</p>
          <p class="dosometing"><i class="fa fa-trash-o" aria-hidden="true"></i><i class="fa fa-pencil-square-o" aria-hidden="true"></i></p>
        </div>
      </li>
      <li>
        <p class="useraddress">成都市</p>
        <div class="uerinfo">
          <p class="u_info">吴&nbsp;&nbsp;13551344721</p>
          <p class="dosometing"><i class="fa fa-trash-o" aria-hidden="true"></i><i class="fa fa-pencil-square-o" aria-hidden="true"></i></p>
        </div>
      </li>
    </ul>
    <div class="add_btn">
      <router-link to="/newaddress">
        <i class="fa fa-plus-square-o" aria-hidden="true"></i><span>新增地址</span>
      </router-link>
    </div>
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
  .addresslist{
    background: #fff;
  }
  .addresslist li{
    padding:.1rem;
    border-bottom:1px solid #efefef;
  }
  .useraddress{
    font-size:.16rem;
  }
  .uerinfo{
    display: flex;
    justify-content: space-between;
    color: #777;
    margin-top:.1rem;
    font-size:.1rem;
  }
  .uerinfo .fa{
    margin-left:.2rem;
    font-size: .16rem;
    color: #aaa;
  }
  .add_btn{
    position: fixed;
    bottom:0;
    height:.4rem;
    line-height:.4rem;
    background: #fff;
    text-align: center;
    width:100%;
  }
  .add_btn a{
    color: #ff4444;
    text-decoration: none;
  }
  .add_btn .fa{
    font-size:.16rem;
    margin-right:.05rem;
    vertical-align: middle;
    padding-bottom: .02rem;
  }
</style>



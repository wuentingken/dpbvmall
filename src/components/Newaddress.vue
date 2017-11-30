<template>
  <div class="container">
    <section class="write">
      <div>
        <ul class="rame">
          <li>
            <p class="left_n">收货人</p>
            <p><input type="text" class="input" placeholder="姓名" v-model="name" v-on:change="save()"></p>
          </li>
          <li>
            <p class="left_n">电话</p>
            <p><input type="text" class="input" placeholder="收货人电话" v-model="phone" v-on:change="save()"></p>
          </li>
          <li>
            <p class="left_n">地址</p>
            <p><input type="text" class="input" placeholder="收货人地址" v-model="address" v-on:change="save()"></p>
          </li>
        </ul>
      </div>
    </section>
    <div class="confirm" v-bind:class="{active: active}">保存</div>
  </div>
</template>

<script>

  export default {
    name: "BinDing",
    data () {
      return {
        name: this.$store.state.count,
        phone:'',
        address:'',
        active: false
      }
    },
    methods: {
      save: function (){
        var _this = this;
        _this.$store.commit('increment');
        console.log(_this.$store.state.count);
        if(_this.name&&_this.phone&&_this.address){
          _this.active = true
        }else{
          _this.active = false
        }
      }
    }
  }
</script>

<style scoped>
  .write{
    background: #fff;
    margin:.1rem 0 .2rem 0;
  }
  .rame li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #efefef;
  }
  .rame li:last-child{
    border-bottom: none;
  }
  .left_n{
    width:.8rem;
    font-size: .14rem;
    font-weight:300;
    text-align: left;
    padding-left:.08rem;
  }
  .rame .input{
    width:2.4rem;
    border:none;
    font-size: .14rem;

  }
  .container p{
    margin:.07rem 0;
    color: #666;
  }
  .confirm{
    background: #ffd987;
    color:#fff;
    width:90%;
    height:.32rem;
    text-align: center;
    line-height: .32rem;
    margin:.06rem auto;
    border-radius: 4px;
    font-size: .15rem;
  }
  .confirm.active{
    background: #ffb110;
  }
</style>

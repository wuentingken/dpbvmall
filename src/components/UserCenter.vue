<template>
  <div class="container">
    <section class="user_top">
      <div class="setting"><i class="fa fa-cog" aria-hidden="true"></i></div>
      <div class="userinfo">
        <div class="leona"><img src="../assets/img/tx.jpg" alt=""></div>
        <div class="name">leona</div>
        <div class="integral"><router-link to="/integral"><i class="fa fa-empire" aria-hidden="true"></i>积分值 <span class="integrat">20</span> > </router-link></div>
      </div>
      <ul class="my">
        <li>我的奖品</li>
        <li class="line"></li>
        <li>我的活动</li>
      </ul>
    </section>
    <section class="action_img"><img src="" alt=""></section>
    <section class="re_action">
      <p class="title">热门活动</p>
      <ul class="action_items">
        <li>
          <router-link to="/binding">
            <div><i class="fa fa-mobile" aria-hidden="true" style="font-size: .18rem"></i></div>
            <p>首绑有礼</p>
          </router-link>
        </li>
        <li>
          <router-link to="/blueprint">
            <div style="background: #fe8869"><i class="fa fa-gift" aria-hidden="true"></i></div>
            <p>晒图有礼</p>
          </router-link>
        </li>
        <li>
          <router-link to="/sign">
            <div style="background: #6fe18c"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
            <p>签到有礼</p>
          </router-link>
        </li>
        <li></li>
      </ul>
    </section>
    <section class="mall">
      <div class="mall_title">
        <div class="mal"><i class="fa fa-empire" aria-hidden="true"></i>积分商城</div>
        <div class="more">更多 ></div>
      </div>
      <ul class="goods_list">
        <li v-for="(item,index) in goods" :class="{'active':index%2!=1}">
          <p class="good_img"><img src="../assets/img/mai.jpg" alt=""></p>
          <p class="good_name"><span class="tag">{{item.tag}}</span>{{item.good_name}}</p>
          <p class="use">{{item.good_use}}</p>
          <p class="money">价值{{item.good_money}}元</p>
        </li>
      </ul>
    </section>
    <section class="action_img"><img src="" alt=""></section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './common/footer.vue'

  var data = [{'tag':'抽奖','good_name':'爱丽小屋 炫彩唇液','good_use':'500积分+34元','good_money':'39'} ,{'tag':'限一件','good_name':'Holika 猪鼻贴三部曲','good_use':'500积分+4.9元','good_money':'9.9'} ,{'tag':'','good_name':'夏季新款荷叶边无袖上衣雪纺套装','good_use':'1360积分','good_money':'136'}]

  export default {
    name: "BinDing",
    components: {
      Footer
    },
    data () {
      return {
        goods: data
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  p{
    margin:0;
  }
  .container{
    background: #e5e5e5;
    color: #666;
  }
  .user_top{
    background: #2fd574;
    color: #fff;
  }
  .setting{
    text-align: right;
    padding-right:.15rem;
    padding-top:.1rem;
    font-size: .16rem;
  }
  .userinfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .leona{
    width:.5rem;
    padding-left:.2rem;
  }
  .leona img{
    width:100%;
    border-radius: 50%;
    border:1px solid #fff;
  }
  .name{
    width:1.2rem;
    font-size: .15rem;
  }
  .integral{
    background: rgba(0,0,0,0.2);
    padding:.05rem;
    font-size: .1rem;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }
  .integral i{
    padding:0 .04rem 0 .02rem;
  }
  .integral a{
    color: #fff;
    text-decoration: none;
  }
  .my{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0,0,0,0.2);
    padding:.08rem 0;
    font-size: .12rem;
    margin-top:.1rem;
  }
  .my li{
    width:49%;
    text-align: center;
  }
  .line{
    width:1px!important;
    height:.11rem;
    background: #fff;
    padding-top:.01rem;
  }
  .action_img{
    height:1.1rem;
    background: #fff;
    margin:.1rem 0;
  }
  .re_action{
    background: #fff;
  }
  .re_action p{
    margin:0;
  }
  .title{
    padding:.07rem;
    font-size: .13rem;
    border-bottom:1px solid #efefef;
  }
  .action_items{
    display: flex;
    justify-content: space-around;
    padding:.1rem 0;
  }
  .action_items li{
    width:20%;
    text-align: center;
  }
  .action_items li div{
    width:.27rem;
    height:.27rem;
    background: #ff6e8e;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: .28rem;
    font-size: .14rem;
    margin:.02rem auto;
  }
  .action_items li a{
    font-size: .1rem;
    color: #666;
    text-decoration: none;
  }
  .mall{
    margin-top:.1rem;
    background: #fff;
  }
  .mall_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.07rem;
    font-size: .13rem;
  }
  .mall_title i{
    margin-right:.05rem;
  }
  .more{
    font-size: .1rem;
  }
  .good_img img{
    width:100%;
  }
  .goods_list{
    display: inline-flex;
    border-top:1px solid #efefef;
    margin-bottom: .1rem;
    flex-wrap: wrap;
  }
  .goods_list li{
    width:39.6%;
    padding:5%;
    border-bottom: 1px solid #efefef;
  }
  .goods_list li.active{
    border-right: 1px solid #efefef;
  }
  .tag{
    display: inline-block;
    padding:.01rem .02rem;
    background: #ff5c2a;
    color: #fff;
    margin-right:.03rem;
    font-size: .1rem;
    border-radius: 4px;
  }
  .good_name{
    color: #333;
    font-size: .12rem;
  }
  .use{
    color: #f60;
    font-size: .11rem;
  }
  .money{
    color: #999;
    font-size: .1rem;
  }
  .goods_list li p{
    margin-bottom: .05rem;
  }
</style>

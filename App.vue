<template>
  <div id="app">
   <div class="head">
   	   	 <div class="left">
   	   	 	 <ul>
   	   	 	 	<router-link to="/" tag="li">霹雳官网</router-link>
   	   	 	 	<li>产品中心</li>
   	   	 	 	<li>配件商城</li>
   	   	 	 	<li>服务市场</li>
   	   	 	 	<li>帮助中心</li>
   	   	 	 </ul>
   	   	 </div>
   	   	 <div class="right">
   	   	 	  <ul>
   	   	 	 	<router-link tag="li" to="/shouchang">我的收藏</router-link>
   	   	 	 	<li>联系客服</li>
   	   	 	 	<li>卖家中心</li>
   	   	 	 	<li>登录</li>
   	   	 	 	<li>注册</li>
   	   	 	 	<router-link tag="li" to="/shopping" class="right-li">购物车({{this.$store.state.arr.length}})</router-link>
   	   	 	 </ul>
   	   	 </div>
   	   </div>
    <router-view/>
 <div class="foot-buttom">
   	   	  <div class="foot-ul">
   	   	 <ul>
   	   	 	<li>
   	   	 		新手上路
   	   	 		<ul>
   	   	 			<li>购物流程</li>
   	   	 			<li>会员制度</li>
   	   	 			<li>订单查询</li>
   	   	 			<li>发票制度</li>
   	   	 		</ul>
   	   	 	</li>
   	   	 	<li>
   	   	 		支付方式
   	   	 			<ul class="foot-one">
   	   	 			<li>贷款付款</li>
   	   	 			<li>网上支付</li>
   	   	 			<li>银行转账</li>
   	   	 			<li>其他方式</li>
   	   	 		</ul>
   	   	 	</li>
   	   	 	<li>
   	   	 		配送服务
   	   	 		<ul>
   	   	 			<li>配送进度查询</li>
   	   	 			<li>商品验货与查收</li>
   	   	 		</ul>
   	   	 	</li>
   	   	 	<li>
   	   	 		售后服务
   	   	 		<ul>
   	   	 			<li>退换货策略</li>
   	   	 			<li>联系客服</li>
   	   	 		</ul>
   	   	 	</li>
   	   	 	<li>
   	   	 		关注我们
   	   	 		
   	   	 	</li>
   	   	 </ul>
   	   	 <img class="img-wxh" :src=imgsrc />
   	   	 <span class="hot">销售热线：(周一至周五9：00至18：00)</span>
   	   	 <span class="tele">300-567-869</span>
   	   	 </div>
   	   	 <div class="hr"></div>
   	   	 <div class="foot-little">	
   	   	 	<ul>
   	   	 	 	<li>关于我们</li>
   	   	 	 	<li>联系我们</li>
   	   	 	 	<li>人才招聘</li>
   	   	 	 	<li>商家入驻</li>
   	   	 	 	<li>霹雳社区</li>
   	   	 	 	<li>广告服务</li>
   	   	 	 	<li>友情链接</li>
   	   	 	 </ul>
   	   	 </div>
   	   	 <div class="foot-item">
   	   	 	<ul>
   	   	 		<li>2017-2020 霹雳五号版权所有，并保留所有权利。</li>
   	   	 		<li>北京市公安局朝阳分局备案编号110105014669 京ICP证070359号  互联网药品信息服务资格证编号(京)-非经营性-2011-0034</li>
   	   	 		<li>音像制品经营许可证苏宿批005号 | 出版物经营许可证编号新出发(苏)批字第N-012号  互联网出版许可证编号新出网证(京)字150号</li>
   	   	 	</ul>
   	   	 </div>
   	   </div>
   	   
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		imgsrc:"/static/img/QQ图片20180611183018.png",
  	}
  }
}
</script>

<style>
.right ul .right-li{
	width: 80px;
	margin-left: 10px;
}
.head{
 	position: relative;
 	width:1366px;
  height:40px;
  background:rgba(51,51,51,1);
  margin: 0 auto;
 }
 .head .left{
 	position: absolute;

  height: 40px;
  left: 63px;
 }
 .head .left li{
 	width:56px;
  height:20px;
 	float: left;
 	margin-left: 20px;
 	line-height:40px;
 	color:rgba(255,255,255,1);
 	font-size:14px;
  font-family:PingFangSC-Regular;
  color:rgba(255,255,255,1);
 }
 .right{
 	position: absolute;
 	margin-right: 0px;
 	height: 40px;
 	left: 839px;
 }
  .right li{
  	width:56px;
    height:20px;
  	float: left;
 	  margin-left: 20px;
 	  line-height:40px;
 	  color:rgba(255,255,255,1);
 	  font-size:14px;
    font-family:PingFangSC-Regular;
    color:rgba(255,255,255,1);
    
  }
  
  .foot-buttom{
  	position: relative;
  	width:1366px;
    height:475px;
    background:rgba(51,51,51,1);
  }
  .foot-buttom li{
  	color: white;
  }
  .foot-ul{
    	margin-left: 83px;
  }
 .img-wxh{
 	width: 90px;
 	position: absolute;
 	top: 145px;
 	left: 855px;
 
 }
 .foot-buttom .foot-ul>ul>li{
 	margin-top: 80px;
 	width:193px;
  height:25px;
 	float: left;
 	font-size:18px;
  font-family:PingFangSC-Semibold;
  color:rgba(255,255,255,1);
  line-height:25px;
 }
 .foot-buttom .foot-ul>ul>li>ul{
 	margin-top:40px;
 }
 .foot-buttom .foot-ul>ul>li>ul>li{
 	margin-top: 20px;
 	width:193px;
  height:20px;
 	font-size:14px;
  font-family:PingFangSC-Regular;
  color:rgba(153,153,153,1);
  line-height:20px;
 }
 .hr{
 	width:800px;
  height:2px;
  border:1px solid rgba(102,102,102,1);
  position:absolute;
  top: 345px;
  left: 283px;
 }
 .hot{
 	display: block;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Regular;
  color:rgba(238,238,238,1);
  line-height:20px;
  position: absolute;
  top: 146px;
  left: 1057px
 }
 .tele{
  height:33px;
  font-size:24px;
  font-family:PingFangSC-Semibold;
  color:rgba(255,255,255,1);
  line-height:33px;
  position: absolute;
  top:186px;
  left: 1055px;
 }
.foot-little li{
	float: left;
	width:48px;
  height:17px;
  font-size:12px;
  font-family:PingFangSC-Regular;
  color:rgba(102,102,102,1);
  line-height:17px;
  margin-top: 367px;
  margin-left: 30px;
}
.foot-little{
	position: absolute;
	left: 395px;
	
}
.foot-item{
	position:absolute;
  left:319px ;
  top: 404px;
  width:728px;
  height:51px;
}
.swiper{
	width: 980px;
	height: 460px;
	overflow: hidden;
	margin-left: 307px;
}
.foot-item li{
	 font-size:12px;
  font-family:PingFangSC-Regular;
  color:rgba(102,102,102,1);
  line-height:17px; 
  text-align: center;
  margin-top: 2px;
}

</style>

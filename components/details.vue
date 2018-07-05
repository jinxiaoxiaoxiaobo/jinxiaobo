<template>
  <div>
	<h>你搜索的商品不存在</h>
	<div class="item">
	  <ul>
	    <li>当前位置：</li>
	    <li>产品中心></li>
	    <li>机械设备></li>
	    <li>机械压路机</li>
	  </ul>
	</div>
	<div class="box">
		<div class="box-left">
			<div class="box-left-bigimg"
				 @mouseover="over($event)"
				 @mousemove="over($event)"
				 @mouseout="out"
				 >
				 <div class="smbox" ref="smboxdome" v-if="boole"></div>
				<img ref="imgsrc" :src="img" />
			</div>
			<div class="fdj"
				v-if="boole"
				>
				<img ref="bigimg" :src="img">
			</div>
			<div class="box-left-smimg">
				<ul ref="boxul">
				   <li v-on:click.stop="b($event)"><img src="../assets/img/ff 2@3x.png"/></li>
				   <li v-on:click.stop="b($event)"><img src="../assets/img/Rectangle 2@3x.png"/></li>
				   <li v-on:click.stop="b($event)"><img src="../assets/img/che 2@3x.png"/></li>
				   <li v-on:click.stop="b($event)"><img src="../assets/img/d 15@3x.png"/></li>
				</ul>
			</div>
		</div>
		<div class="box-right">
			<div class="box-right-top">
			  	<div class="box-right-top-text">SSR200AC-8全液压单驱单钢压路机</div>
			  	<div class="box-right-mol-text">
			  		<span class="box-right-mol-text-xh">SSR200AC-8<img src="../assets/img/icon_061_narrow2_16_normal@2x.png"/></span>
			  		<span class="box-right-mol-text-js">专家快评：全液压操作简单便捷，换向快，无需踩离合，挂档，刹车， 满松离合等动作，施工效率提升20%，燃油费用同等节省20%。(每行 最长30个汉字)</span>
			  	</div>
			  	<div class="box-right-top-details">
			  		<span class="box-right-top-details-jg">
			  			价格
			  		</span>
			  		<span class="box-right-top-details-number">
			  			￥450000.00
			  		</span>
			  	</div>
			</div>
			<div class="box-right-mol">
				<hr />
				  <ul>
				  	<li>月销量<span>52550</span></li>
				  	<li>累计评价<span>52550</span></li>
				  	<li>商品追踪<span>52550</span></li>
				  </ul>
				<hr />
			</div>
			<div class="box-right-buttom">
				<div class="box-right-buttom-ps">
					<span class="box-right-buttom-ps-text">配送</span>
					<span class="box-right-buttom-ps-dz">广东广州</span>
					<span class="box-right-buttom-ps-z">至</span>
					<span class="box-right-buttom-ps-bj">北京</span>
					<input type="checkbox" name="xz">
					<span class="box-right-buttom-ps-kd">快递&nbsp&nbsp免运费</span>
					<input type="checkbox" name="xz">
				</div>
			    <div class="box-right-buttom-ps-color">
			    	<span>产品颜色</span>
			    	<div class="box-right-buttom-ps-color-text">
			    		<ul>
			    			<li>红</li>
			    			<li>橙</li>
			    			<li>黄</li>
			    			<li>绿</li>
			    			<li>青</li>
			    			<li>蓝</li>
			    			<li>紫</li>
			    			<li>白</li>
			    			<li>黑</li>
			    			<li>棕</li>
			    		</ul>
			    	</div>
			    </div>
			    <div class="box-right-buttom-ps-type">
			    	<div class="box-right-buttom-ps-type-text">套餐类型</div>
			    	<div class="box-right-buttom-ps-type-g">官方标配</div>
			    </div>
			    <div class="box-right-buttom-ps-sl">
			    	<div class="box-right-buttom-ps-sl-text">数量</div>
			    	<div class="box-right-buttom-ps-sl-jian">-</div>
			    	<div class="box-right-buttom-ps-sl-number">1</div>
			    	<div class="box-right-buttom-ps-sl-jia">+</div>
			    	<div class="box-right-buttom-ps-sl-kucun">库存3928件</div>
			    </div>
			    <div class="box-right-buttom-ps-bottom">
			    	<div class="box-right-buttom-ps-ljgm">立即购买</div>
			    	<div @click="ge" class="box-right-buttom-ps-gwc">加入购物车</div>
			    </div>
			    <div class="box-right-buttom-ps-cn">
			    	<div class="box-right-buttom-ps-cn-text">承诺</div>
			    	<div class="box-right-buttom-ps-cn-icon"><img src="../assets/img/icon_065_credit card_24_normal@3x.png"/></div>
			    	<div class="box-right-buttom-ps-cn-icon2">7天无理由</div>
			    	<div class="box-right-buttom-ps-cn-wly"><img src="../assets/img/icon_065_credit card_22_normal@2x.png"/></div>
			    	<div class="box-right-buttom-ps-cn-yfx">运费险</div>
			    </div>
			     <div class="box-right-buttom-ps-zf">
			    	<div class="box-right-buttom-ps-cn-text">支付</div>
			    	<div class="box-right-buttom-ps-cn-icon"><img src="../assets/img/icon_065_credit card_23_normal@2x.png"></div>
			        <div class="box-right-buttom-ps-cn-icon2">花呗分期</div>
			        <div class="box-right-buttom-ps-cn-wly"><img src="../assets/img/icon_065_credit card_25_normal@2x.png"></div>
			        <div class="box-right-buttom-ps-cn-yfx xykzf">信用卡支付</div>
			        <div class="box-right-buttom-ps-cn-wly jfb"><img src="../assets/img/icon_065_credit card_27_normal@2x.png"/></div>
			    	<div class="box-right-buttom-ps-cn-yfx">集分宝</div>
			     </div>
			     
			   </div>
		   </div>
	   </div>
	  <div class="buttom">
		  <div class="buttom-lift">
		  	<div class="buttom-lift-head">
		  		<span>华力店铺....</span>
		  		<img src="../assets/img/icon-091-contact us-18-normal@3x.png"/>
		  	</div>
		  	<div class="buttom-lift-hldp">
		  		 <div class="buttom-lift-hldp-icon">
		  		 	
		  		 </div>
		  		 <span>华力店铺</span>
		  	</div>
		  	 <div class="buttom-lift-hldp-text">
		  		 	  <div class="buttom-lift-hldp-text-top">
		  		 	  	<span>信誉：</span>
		  		 	  	<img src="../assets/img/icon_168_star_20_normal@3x.png" />
		  		 	  	<img src="../assets/img/icon_168_star_20_normal@3x.png" />
		  		 	  	<img src="../assets/img/icon_168_star_20_normal@3x.png" />
		  		 	  	<img src="../assets/img/icon_168_star_20_noal@3x(1).png" />
		  		 	  	<img src="../assets/img/icon_168_star_20_noal@3x(1).png" />
		  		 	  </div>
		  		 	  <div class="buttom-lift-hldp-text-buttom">
		  		 	  	<span>店主：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp洪文彬34895224</span>
		  		 	  </div>  
		  		 </div>
		  		 <div class="buttom-lift-ms">
		  	<ul>
		  		<li>描述
		  			<div>
		  		   <span>4.7</span>
		  		  <img src="../assets/img/icon_065_narrow_18_normal@3x.png" />
		  		 </div>
		  		</li>
		  		<li>服务
		  			<div>
		  		  <span>4.7</span>
		  		  <img src="../assets/img/icon_065_narrow_18_normal@3x.png" />
		  		 </div>
		  		</li>
		  		<li>物流
		  			<div>
		  		  <span>4.7</span>
		  		  <img src="../assets/img/icon_065_narrow_18_normal@3x.png" />
		  		   </div>
		  		</li>
		  	</ul>
		  </div>
		  <div class="buttom-lift-bottom">
		  	<div class="buttom-lift-bottom-top">进入店铺</div>
		  	<div class="buttom-lift-bottom-xia">收藏店铺</div>
		  </div>
		  </div>
		  
		  <div class="buttom-right">
		  	<div class="buttom-right-hade">
		  		<ul>
		  			<li class="a" ref="a" v-on:click="qh($event)" style="color: #2962FF;">商品详情</li>
		  			<li class="b" ref="b" v-on:click.stop="qh($event)">累计评价(2456)</li>
		  			<li class="c" ref="c" v-on:click.stop="qh($event)">专享服务</li>
		  		</ul>
		  	</div>
		  	<div class="buttom-right-text" ref="buttom">
		  	商品详情
		  	</div>
		  </div>
	  </div>
  </div>	
</template>

<script>
	import h from './head'

export default {
	components:{
		h,
	},
	data(){
		return{
			boole:false,
			img:"/static/img/d 15@3x.1055361.png",
			 classObject: {
          active: true,
           'text-danger': false
            },
      sj:{
      	a:{"xj":"商品详情"},
      	b:{"xj":"累计评价"},
      	c:{"xj":"专享服务"}
      },
      arr:[],
      obj:{},
		}
	},
	methods:{
		b(e){
			this.img=e.target.src
			
			
		},
		ge(){
	      this.$store.commit('jia')
	      this.obj.title="北京中天元盛科技有限公司"
	      this.obj.li={}
	      this.obj.li.item="每行最长15个字符字符字符字符字 数控联动操作系统"
	      this.obj.li.nw=150000
	      this.obj.li.old=180000
	      this.obj.li.sl=1
	      this.obj.li.ind=false
	      this.obj.li.img=this.img
	      this.$store.commit('zj',this.obj)
		},
		qh(e){
		    	this.$refs.a.style.color="black"
			   	this.$refs.b.style.color="black"
			   	this.$refs.c.style.color="black"
			   for(var p in this.sj){
			   	if(e.target.className.indexOf(p)!=-1){
			   		this.arr.push(this.sj[p])
			   		this.$refs.buttom.innerText=this.arr[0].xj
			   	  this.arr=[]
			   	  e.target.style.color="#2962FF"
			   	}
			   }
			},
 	over(e){
 		this.boole=true
 		let x=e.clientX-87-75+104
 		let y=e.clientY-120-75+220
 		let cc=Math.min(Math.max(104,x),434);
 		let ee=Math.min(Math.max(220,y),430);
 		this.$refs.smboxdome.style.left=cc+"px"
 		this.$refs.smboxdome.style.top=ee+"px"
 		let mg=this.$refs.smboxdome.style.left.slice(0,3)
 		let mgtop=this.$refs.smboxdome.style.top.slice(0,3)
 		 let  xx=(mg-104)/480*720
 		let yy=(mgtop-220)/360*540
 		this.$refs.bigimg.style.marginLeft = -xx+"px";
 		this.$refs.bigimg.style.marginTop = -yy+"px";

 	  },
 	out(){
 		this.boole=false
 	    },
 	 appScroll(){
 	
 	 }
 },
 mounted() {
     window.addEventListener('scroll', this.appScroll)
   
}
}
</script>

<style scoped>

.item{
	width:1366px;
    height:80px;
    background:rgba(255,255,255,1);

}

.item ul{
	margin-left: 83px;
	
}
.item ul li{
		float: left;
width:70px;
height:20px;
font-size:14px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:20px;
    margin-top: 30px;

}

.box{
	height: 911px;
	width: 1366px;
	background:rgba(255,255,255,1);
}
.box-left{
	height: 911px;
	width: 480px;

	float: left;
	margin-left: 104px;
}
.box-right{
	height: 911px;
	width: 505px;
	float: left;
	margin-left: 120px;
}
.box-left-bigimg img{
	width: 480px;
    height: 360px;
    position: relative;
}
.box-left-bigimg img:hover{
	cursor: move;
}
.smbox:hover{
	cursor: move;
}
.smbox{
	height: 150px;
	width: 150px;
	background: #000; opacity: 0.42;
	position: absolute;
	top: 220px;
	left: 104px;
	z-index: 11;
}
.box-left-smimg{
	width: 476px;
	height: 104px;
	margin-top: 20px;
}
.box-left-smimg ul {
	margin-left: -20px;
}
.box-left-smimg ul li{
	float: left;
	margin-left:18px;
	 border: 1px dashed #CACACA;
}
.box-left-smimg ul li img{
	width: 104px;
	height: 104px;
}
.box-right-top-text{
	width:505px;
    height:66px;
    font-size:24px;
    font-family:PingFangSC-Semibold;
    color:rgba(0,0,0,1);
    line-height:33px;
}
.box-right-mol-text-xh{
	display: inline-block;
	width:130px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Semibold;
    color:rgba(0,0,0,1);
    line-height:22px;

}
.box-right-mol-text-xh img{
	margin-left: 10px;
	width: 16px;
	height: 16px;
}
.box-right-mol-text-js{
	display: block;
	width:496px;
height:66px;
font-size:16px;
font-family:PingFangSC-Regular;
color:rgba(102,102,102,1);
line-height:22px;
margin-top: 20px;
}
.box-right-top-details{
	height: 33px;
	width: 300px;
	margin-top: 24px;
}
.box-right-top-details-jg{
display: block;
	float: left;
  width:37px;
height:25px;
font-size:18px;
font-family:PingFangSC-Semibold;
color:rgba(51,51,51,1);
line-height:25px;
}
.box-right-top-details-number{
	display: block;
	float: left;
	width:122px;
height:33px;
font-size:24px;
font-family:PingFangSC-Semibold;
color:rgba(255,103,0,1);
line-height:33px;
margin-left: 60px;
margin-top: -3px;
}
.box-right-mol{
	width: 558px;
	height: 42px;
	margin-top: 44px;
}
.box-right-mol ul{
	margin-left: -32px;
}
.box-right-mol ul li{
	margin-bottom: 8px;
	float: left;
   margin-left: 70px;
	width:116px;
    height:22px;
   font-size:16px;
   font-family:PingFangSC-Regular;
   color:rgba(51,51,51,1);
   line-height:22px;
}
hr{
	clear:both;
	background: #E0E0E0; 
}
.box-right-mol ul li span{
    display: inline-block;
	width:48px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Semibold;
    color:rgba(41,98,255,1);
    line-height:22px;
    margin-left: 4px;
}
.box-right-buttom{
	margin-top: 40px;
	
}
.box-right-buttom-ps span{
	display: inline-block;
   height:22px;

  font-family:PingFangSC-Regular;
   color:rgba(51,51,51,1);
   line-height:22px;
}
.box-right-buttom-ps-text{
	width:37px;
height:25px;
font-size:18px;
font-family:PingFangSC-Semibold;
color:rgba(51,51,51,1);
line-height:25px;
}
.box-right-buttom-ps-dz{
	width:64px;
font-size: 14px;
margin-left: 60px;
}
.box-right-buttom-ps-z{
	width:16px;
	margin-left: 10px;
font-size: 14px;
}
.box-right-buttom-ps-z{
	width: 32px;
	margin-left: 10px;
	font-size: 14px;
}
.box-right-buttom-ps input[type="checkbox"]{

	height: 20px;
	width: 20px;
}
.box-right-buttom-ps-kd{
	width:79px;
	margin-left: 20px;
font-size: 14px;
}
.box-right-buttom-ps-bj{
	font-size: 14px;
}
.box-right-buttom-ps-color span{
	width:73px;
height:25px;
font-size:18px;
font-family:PingFangSC-Semibold;
color:rgba(51,51,51,1);
line-height:25px;
display: block;
margin-top: 28px;
float: left;
}
.box-right-buttom-ps-color ul{
	margin-top: 11px;
	margin-left: 87px;
}
.box-right-buttom-ps-color li{
	float: left;
	width:60px;
   height:40px;
   border:1px solid rgba(224,224,224,1);
font-size:14px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:40px;
text-align: center;
margin-left: 10px;
margin-top: 10px;
}
.box-right-buttom-ps-type{
	display: inline-block;
	
}
.box-right-buttom-ps-type-text{
width:73px;
height:25px;
font-size:18px;
font-family:PingFangSC-Semibold;
color:rgba(51,51,51,1);
line-height:25px;
float: left;
margin-top: 30px;
}
.box-right-buttom-ps-type-g{
	width:60px;
height:40px;
border:1px solid rgba(224,224,224,1);
font-size:14px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:40px;
text-align: center;
float: left;
margin-top: 20px;
margin-left: 24px;
}
.box-right-buttom-ps-sl{
	margin-top: 26px;
}
.box-right-buttom-ps-sl div{
	float: left;
}
.box-right-buttom-ps-sl-text{
	width:37px;
height:25px;
font-size:18px;
font-family:PingFangSC-Semibold;
color:rgba(51,51,51,1);
line-height:25px;
}
.box-right-buttom-ps-sl-jian{
	border: 1px dashed #CACACA;
	width: 20px;
	height: 20px;
	color: #CACACA;
	margin-left: 60px;
	font-size: 40px;
	line-height: 15px;
	text-align: center;
}
.box-right-buttom-ps-sl-number{
	margin-left: 20px;
	width:10px;
    height:33px;
    font-size:24px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    line-height:22px;
	
}
.box-right-buttom-ps-sl-jia{
	border: 1px dashed #CACACA;
	width: 20px;
	height: 20px;
	color: #CACACA;
	margin-left: 20px;
	font-size: 27px;
	line-height: 23px;
	text-align: center;
}
.box-right-buttom-ps-sl-kucun{
	width:87px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Semibold;
    color:rgba(153,153,153,1);
     line-height:22px;
    margin-left: 40px; 
}
.box-right-buttom-ps-bottom{
	margin-top: 93px;
	height: 60px;

}
.box-right-buttom-ps-ljgm{
width:200px;
height:60px;
background:rgba(255,228,208,1);
float: left;
font-size:24px;
font-family:PingFangSC-Medium;
color:rgba(255,103,0,1);
line-height:60px;
text-align: center;
}
.box-right-buttom-ps-gwc{
float: left;
width:200px;
height:60px;
background:rgba(255,103,0,1);
margin-left: 20px;
font-size:24px;
font-family:PingFangSC-Medium;
color:rgba(255,255,255,1);
line-height:60px;
text-align: center;
}
.box-right-buttom-ps-cn div{
	float: left;
}
.box-right-buttom-ps-cn{
	margin-top: 40px;
}
.box-right-buttom-ps-cn-text{
	width:37px;
    height:25px;
    font-size:18px;
    font-family:PingFangSC-Semibold;
    color:rgba(51,51,51,1);
    line-height:25px;
}
.box-right-buttom-ps-cn-icon img{
	width: 24px;
	height: 24px;
	margin-left: 60px;
}
.box-right-buttom-ps-cn-icon2{
	width:74px;
height:22px;
font-size:16px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:22px;
margin-left: 10px;
}
.box-right-buttom-ps-cn-wly{
	margin-left: 47px;
	height: 24px;
	width: 24px;
}
.box-right-buttom-ps-cn-yfx{
	width:48px;
height:22px;
font-size:16px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:22px;
margin-left: 10px;
}
.box-right-buttom-ps-zf{
	margin-top: 85px;
}
.box-right-buttom-ps-zf div{
	float: left;
}
.xykzf{
	width: 80px;
	
}
.jfb{
	margin-left: 40px;
}
.fdj{
	width: 480px;
    height: 360px;
    position: absolute;
    top: 220px;
    left: 600px;
    overflow: hidden;
    background: white;
    border: 1px solid black;
}
.fdj img{
	width: 720px;
	height: 480px;
}
.buttom{
	width:1366px;
  height:1911px;
margin-left: 83px;

}
.buttom-lift{
	width:200px;
height:299px;
background:rgba(255,255,255,1);
border:1px solid rgba(224,224,224,1);
float: left;
}
.buttom-right{
	width:940px;
height:1911px;
border:1px solid rgba(224,224,224,1);
float: left;
margin-left: 60px;
}
.buttom-lift-head{
	width:200px;
height:40px;
background:rgba(250,250,250,1);
}
.buttom-lift-head span{

font-size:14px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:40px;
padding-left: 20px;
}
.buttom-lift-head img{
margin-left: 70px;
	width: 18px;
	height: 18px;
}
.buttom-lift-hldp{
	height: 40px;
	width: 200px;
	margin-top: 10px;
}
.buttom-lift-hldp-icon{
	width:40px;
height:40px;
background:rgba(227,242,253,1);
margin-left: 20px;
float: left;

}
.buttom-lift-hldp span{
font-size:12px;
font-family:PingFangSC-Regular;
color:rgba(41,98,255,1);
line-height:17px;
padding-left: 10px;
}
.buttom-lift-hldp-text-top .buttom-lift-hldp-text-buttom{
	height: 36px;
	width: 200px;
	margin-top: 10px;
}
.buttom-lift-hldp-text-top span {
	font-size:12px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:36px;
padding: 20px;

}
.buttom-lift-hldp-text-top span{
	
}
.buttom-lift-hldp-text-top img{
	margin-left: 4px;
	width: 12px;
	height: 12px;
}
.buttom-lift-hldp-text-buttom span{
	font-size:12px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:17px;
padding-left: 20px;
}
.buttom-lift-ms{
	height: 45px;
	width: 200px;
	margin-top: 32px;
}
.buttom-lift-ms ul li div{
	margin-left: -3px;
}
.buttom-lift-ms ul li{
	float: left;
	margin-left: 35px;
	font-size:12px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:17px;
}
.buttom-lift-ms ul{
	margin-left: -6px;
}
.buttom-lift-ms ul li span{
display: inline-block;
}
.buttom-lift-ms ul li img{
	display: inline-block;
	width: 13px;
	height: 13px;
}
.buttom-lift-bottom{
	height: 70px;
	width: 160px;
	margin-top: 35px;
	margin-left: 20px;
	}
	.buttom-lift-bottom div{
		width:70px;
height:30px;
background:rgba(238,238,238,1);
float: left;
font-size:12px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:30px;
text-align: center;
	}
.buttom-lift-bottom-xia{
	margin-left: 20px;
	
}	
.buttom-right-hade{
	width:940px;
height:60px;
background:rgba(255,255,255,1);
}
.buttom-right-hade ul li{
	width:176px;
height:60px;
background:rgba(255,255,255,1);
border:1px solid rgba(224,224,224,1);
text-align: center;
font-size:18px;
font-family:PingFangSC-Semibold;
line-height:60px;
float: left;
}
</style>
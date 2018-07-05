<template>
   <div>
       <h>你搜索的商品不存在</h>
   	   <div class="banner">
   	   	<div class="swiper">
       <el-carousel indicator-position="outside">
        <el-carousel-item>
          <h3><img src="../assets/img/banner@2x.png"></h3>
        </el-carousel-item>
        <el-carousel-item>
          <h3><img src="../assets/img/banner@2x.png"></h3>
        </el-carousel-item>
      </el-carousel>
       </div>
   	   	 <div class="banner-litter">
   	   	 	 <ul>
   	   	 		 <li
   	   	 		 	@mouseover="over($event,index)"
   	   	 		 	@mouseout="out"
   	   	 		 	v-for="(itm,index) of item"
   	   	 		 	>
   	   	 		   {{itm}}
   	   	 		 	<div class="icon"></div>
   	   	 		 </li>
   	   	 		
   	   	 		
   	   	 	 </ul>
   	   	 	 
   	   	 </div>
   	   	  <div class="banner-litter-ui" 
   	   	  	v-if="boole"
   	   	  	@mouseover="over"
   	   	  	@mouseout="out"
   	   	  >
   	   	 	 	<ul class="banner-litter-ui-ui">
   	   	 	 	    <li v-for="(val,key) in cpli">
   	   	 	 	    	<span class="banner-litter-ui-li">{{val.title}}</span>
   	   	 	 	        <ul>
   	   	 	 	        	<li v-for="(item,index) of val.ili" :keys='index'>{{item}}</li>
   	   	 	 	        	
   	   	 	 	        </ul>
   	   	 	 	    </li>
   	   	 	 	    
   	   	 	 	   
   	   	 	 	</ul>
   	   	 	 </div>
   	   </div>
   	   <div class="Products" v-for="(val, key, index) in datas" key=index>
   	   	<div class="Products-litter">
   	   		<div class="s"></div>
   	   		<div class="P-l">{{val.title}}</div>
   	   	</div>
   	   	 <ul>
   	   	    <router-link tag="li" to="/details" class="p-img">
   	   	    	<img src="val.img" />
   	   	    </router-link>
   	   	 	  <li v-for="(item,inde) in val.li">
   	   	 	  	<div class="Products-box" v-if="item.boobe">{{item.box}}</div>
   	   	 	   <router-link tag="div" to="/details" class="Products-img">
   	   	 	    	<img :src="item.src" />
   	   	 	   </router-link>
   	   	 	 	<div class="Products-litter-top" v-if="item.litter">{{item.litter}}</div>
   	   	 	 	<div class="Products-litter-m" v-if="item.model">{{item.model}}</div>
   	   	 	 	<div class="Products-litter-bottom" v-if="item.price">价格：{{item.price}}元</div>
   	   	 	 </li>
   	   	 	 
   	   	 </ul>
   	   </div>
   	   <div class="foot">
   	   	 <ul>
   	   	 	<li>
   	   	 		<div class="foot-img">
   	   	 			￥
   	   	 		</div>
   	   	 		<div class="foot-litter">
   	   	 		  <span class="spy">正品保障</span>
   	   	 		  <span class="spr">官方渠道享有最低价</span>
   	   	 		</div>  
   	   	 	</li>
   	   	 	<li>
   	   	 		<div class="foot-img">
   	   	 			<img class="img1" src="../assets/img/Group 6quick delivery.png">
   	   	 		</div>
   	   	 		 <div class="foot-litter">
   	   	 		  <span class="spy">快速发货</span>
   	   	 		  <span class="spr">专业的运输团队送货上门</span>
   	   	 		 </div>
   	   	 	</li>
   	   	 	<li>
   	   	 		<div class="foot-img">
   	   	 			<img class="img2" src="../assets/img/Fill 4free.png">
   	   	 		</div>
   	   	 		 <div class="foot-litter">
   	   	 		  <span class="spy">售后无忧</span>
   	   	 		  <span class="spr">七年包退一年保修</span>
   	   	 		 </div>
   	   	 	</li>
   	   	 	<li>
   	   	 		<div class="foot-img">
   	   	 			<img class="img3" src="../assets/img/timeon time.png">
   	   	 		</div>
   	   	 		    <div class="foot-litter">
   	   	 		      <span class="spy">正品保障</span>
   	   	 		      <span class="spr">最多不超过九个字符</span>
   	   	 		    </div>
   	   	 	</li>
   	   	 </ul>
   	   </div>
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
   	   	 <img class="img-wxh" src="../assets/img/QQ图片20180611183018.png" />
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
import h from './head'
export default {
	components:{
		h,
	},
  data () {
      return {
      linb:0,	
      banneritem:'',

      swiperOption: {
     
      	preventLinksPropagation : false,
      	  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: true,
  },
      	 autoplay:true,
      	 pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
         loop: true,
       },
      cpli:{
      	  'jx':{"title":'机械','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'cp':{"title":'产品','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'sb':{"title":'设备','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']}
               },
      itemli:[{
      	  'jx':{"title":'定时定点','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'cp':{"title":'刚刚','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'sb':{"title":'几句话','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']}
                },{
                'jx':{"title":'恶热','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'cp':{"title":'产品','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'sb':{"title":'FDFD','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']}	
                },{
                'jx':{"title":'阿散酸','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'cp':{"title":'AFG','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'sb':{"title":'设GFGFG','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']}	
                },{
                	'jx':{"title":'那个韩国','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'cp':{"title":'ASASA','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'sb':{"title":'FDFDFD','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']}
                },{
                'jx':{"title":'官方','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'cp':{"title":'产发的','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'sb':{"title":'阿萨','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']}	
                },{
                'jx':{"title":'奥德赛','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'cp':{"title":'圣埃蒂安','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']},
      	  'sb':{"title":'飒飒','ili':['石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械','石油机械']}	
                }],
      item:['最长10个字','机器人',"机械配件","原料市场","加工类","模具类","工具类"],
      boole:false,
      datas:{
      	'yi':{
      		'title':'挖掘机',
      		'img':"/static/img/Bitmap@2x.e995114.png",
      		      		'li':{
  					   'one':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'two':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'san':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'si':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   }
      			  
      		}
      	},
         	'er':{
      		'title':'混泥土',
      		'img':"/static/img/Bitmap@2x.e995114.png",
      		'li':{
  					   'one':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'two':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'san':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'si':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   }
      			  
      		}
      	},
      	'san':{
      		'title':'混泥土',
      		'img':"/static/img/Bitmap@2x.e995114.png",
      	      		'li':{
  					   'one':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'two':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'san':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   },
  					   'si':{
  					   	 'src':"/static/img/Bitmap@2x.e995114.png",
  				       'litter':'迷你微型液压挖掘机',
  				       'model':'sy16c',
  				       'price':'15000',
  				       'boobe':true,
  				       'box':'新品'
  					   }
      		}
      	} 	
      
      
      },
      
    
    }
  },
 methods:{
 	over(t,i){
 		
 		if(i==undefined){
 			i=this.linb
 		}else{
 			this.linb=i
 		}
 		this.boole=true
 		this.banneritem=t.target.innerText
 		this.cpli=this.itemli[i]
 	},
 	out(){
 		this.boole=false
 	}
 },

}


</script>

<style scoped>

 .banner{
 	position: relative;
 	width: 1366px;
 	height: 460px;
 	z-index: 1;
 }

 .banner-litter{
 	position: absolute;
 	z-index: 99;
 	background: red;
 	top: 0px;
 	left: 83px;
 	width:216px;
  height:461px;
background:rgba(255,255,255,0.9);
  opacity:0.5018;
 }

 .banner-litter li{
 	width:224px;
height:43px;
font-size:16px;
font-family:PingFangSC-Regular;
color:rgba(102,102,102,1);
  line-height:43px;

text-indent: 20px;
 }
 .banner-litter li .icon{
 	position: absolute;
 	z-index: 1100;
 	width:0;
   height:0;
   border: 14px solid transparent;
   border-left-color: white;
  margin-top: -36px;
  right: 0;
 }
 .banner-litter li:hover{
 	background:rgba(41,98,255,1);
 	color:rgba(255,255,255,1);
 }

 .banner-litter-ui{
 	height: 460px;
 	width: 612px;
 	background:white;
 	position: absolute;
 	top: 0px;
 	left: 307px;
 	z-index: 1000;
 	
 }
 .el-carousel__item h3 {
 
    line-height: 400px;
 
  }
 
 .Products{
 	height: 423px;
 	width: 1366px;
 	background:rgba(250,250,250,1)
 }
 .Products ul{
 	margin-left: 63px;
 }
 .Products li{
 	position: relative;
 	margin-left: 20px;
 	width: 224px;
 	height: 300px;
 	background:rgba(255,255,255,1);
 	float: left;
 }
 .Products-litter{
 	width: 224px;
 	height: 93px;
  position: relative; 
  margin-left: 83px;
 }
 .Products-litter .s{
 	width:2px;
  height:20px;
  background:rgba(41,98,255,1);
  position: absolute;
  top: 36.5px;
 }
 .Products-litter .P-l{
 	width:72px;
  height:33px;
  font-size:24px;
  font-family:PingFangSC-Semibold;
  color:rgba(41,98,255,1);
  line-height:33px;
  position: absolute;
  top: 30px;
  left: 8px;
 }
div .el-carousel__item .is-active .is-animating{
 	height: 460px;
 }
div  .el-carousel__item .is-animating{
	height: 460px;
}
div .el-carousel{
	height: 460px;
}
.el-carousel__container{
	height: 460px;
}
.banner img{
	height: 460px;
	width: 1000000;
}
 .Products-img img{
 	width: 157px;
 	height: 148px;
 	margin-top: 40px;
 	margin-left: 34px;
 }
 .Products-litter-top{
 	width: 100%;
 	font-size:18px;
  font-family:PingFangSC-Regular;
  color:rgba(51,51,51,1);
  line-height:25px;
  text-align: center;
  margin-top: 20px;
 }
 .Products-litter-m{
 	width: 100%;
 	font-size:14px;
  font-family:PingFangSC-Regular;
  color:rgba(51,51,51,1);
  line-height:20px;
  text-align: center;
  margin-top: 4px;
 }
 .Products-litter-bottom{
 	font-size:18px;
  font-family:PingFangSC-Medium;
  color:rgba(255,103,0,1);
  line-height:25px;
  text-align: center;
  margin-top: 18px;
  }
  .Products-box{
  	left: 72px;
  	position: absolute;
  	width:80px;
    height:30px;
    background:rgba(41,98,255,1);
    font-size:14px;
    font-family:PingFangSC-Medium;
    color:rgba(255,255,255,1);
    line-height:30px;
    text-align: center;
   
  }
  .p-img{
  	width:224px;
    height:330px;
  }
  .foot{
    width:1366px;
    height:190px;
    background:rgba(255,255,255,1);
    margin-left: 83px;
  }
  .foot-img{
  	margin-top: 40px;
  	width:110px;
    height:110px;
    background:rgba(227,251,255,1);
    border-radius: 50%;
  }
  .foot li{
  	float: left;
  	height: 190px;
  
  	margin-left: 20px;
  }
  .foot-img{
  	
  	float: left;
  	text-align: center;
  	line-height: 110px;
  	color: #38AADF;
  	font-size: 31px;
  }
  .foot-img .img1{
  	margin-top: 34px;
  
  }
  .foot-img .img2{
  	margin-top: 35px;
  }
  .foot-img .img3{
  	margin-top: 32px;
  }
  .foot-litter{
  	float: left;
  	margin-top: 63px;
  	margin-left: 30px;
  }
  .foot-litter .spy{
  	display: block;
  	width:96px;
   height:33px;
   font-size:24px;
   font-family:PingFangSC-Semibold;
   color:rgba(51,51,51,1);
   line-height:33px;
   text-align: center;
  }
  .font-litter .spr{
  	display: block;
  	width:121px;
    height:20px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    line-height:20px;
    text-align: center;
    margin-top: 10px;
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
.y{
	float: left;
}
.banner-litter-ui-li{
	width:80px;
height:28px;
font-size:20px;
font-family:PingFangSC-Semibold;
color:rgba(153,153,153,1);
line-height:28px;
margin-top: 30px;
display: block;
}
.banner-litter-ui ul li ul li{
	display: inline-block;
	width:96px;
height:22px;
font-size:16px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:22px;
margin-top: 11px;
}
.banner-litter-ui-ui{
	margin-top: 30px;
}


</style>

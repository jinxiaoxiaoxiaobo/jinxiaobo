<template>
	<div>
		<h>{{ssjg}}</h>
		<div v-if="this.$store.state.arr.length">
		<div class="hade">
		  <div class="hade-left">
		    <ul>
		        <li class="hade-li-bul">
		           <span>全部商品</span>
		           <span>4</span>
		           <div class="hade-left-bul"></div>
		        </li>
		        <li>
		           <span>降价商品</span>
		           <span>2</span>
		           <div></div>
		        </li>
		        <li>
		           <span>库存紧张</span>
		           <span>1</span>
		           <div></div>
		        </li>
		        <li>
		           <span>失效商品</span>
		           <span>4</span>
		           <div></div>
		        </li>
		    </ul>
		  </div>
		  <div class="hade-right">
		     <span class="hade-right-text">以选商品(不含运费)</span>
		     <span class="hade-right-many">{{zj}}</span>
		     <div class="hade-right-buttom">结算</div>
		  </div>
		</div>
		<div class="hade-m">
			<img @click="duigou" src="../assets/img/icon_081_choose_14_normal@3x.png" />
			<span class="qx">全选</span>
			<img @click="duigou" v-if="bool" class="hade-m-duigou" src="../assets/img/duigou.png" />
			<span class="spxx">商品信息</span>
			<span class="dj">单价</span>
			<span class="sl">数量</span>
			<span class="je">金额</span>
			<span class="cz">操作</span>
		</div>
		<div class="gouwuche" v-for="itm,index in this.$store.state.arr">
			<div class="gouwuche-title">
				<img @click="duicuo(index)" src="../assets/img/icon_081_choose_14_normal@3x.png"/>
				<img @click="duicuo(index)" v-if="dc[index].li.ind"  class="gouwuche-box-duigou" src="../assets/img/duigou.png" />
				<span>{{itm.title}}</span>
			</div>
			<div class="gouwuche-box" >
				<img class="gouwuche-box-icon" src="../assets/img/icon_081_choose_14_normal@3x.png" />
				<img class="gouwuche-box-zhutu" :src="itm.li.img">
				<span class="gouwuche-box-item">{{itm.li.item}}</span>
				<div class="gouwuche-box-jiage">
					<span class="gouwuche-box-jiage-one">￥{{itm.li.old}}</span>
					<span class="gouwuche-box-jiage-two">￥{{itm.li.nw}}</span>
				</div>
				<img @click="jian(index)" class="gouwuche-box-jian" src="../assets/img/icon-061-normal@3x.png" />
				<span class="gouwuche-box-number" v-text="itm.li.sl"></span>
				<img @click="jia(index)" class="gouwuche-box-jia" src="../assets/img/icon-061-lnarrow-20-normal@3x.png" />
				<span class="gouwuche-box-zj">{{itm.li.nw*itm.li.sl}}.00</span>
				<div class="gouwuche-box-sc">
					<span>移入收藏</span>
					<span @click="sc(index)">删除</span>
				</div>
			</div>
		</div>
		<div class="gouwuche-m">
	  	  <div class="gouwuche-m-left">
	  	  	<ul>
	  	  		<li><img @click="d" src="../assets/img/icon_081_choose_14_normal@3x.png"/>
	  	  		    <img v-if="dui" @click="d" class="gouwuche-m-left-duihao" src="../assets/img/duigou.png"/>
	  	  		     <span @click="d">全选</span></li>
	  	  		<li @click="shanchu">删除</li>
	  	  		<li>消除失效商品</li>
	  	  		<li>移除收藏夹</li>
	  	  	</ul>
	  	  </div>
	  	  <div class="gouwuche-m-right">
	  	  	
	  	  </div>
	    </div>
	 </div>
	  <div v-if="!this.$store.state.arr.length">
	  	你购物车还没货
	  	你购物车还没货
	  	你购物车还没货
	  	你购物车还没货
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
		  zq:true,
	      bool:false,
	      sl:1,
	      dc:this.$store.state.arr,
	      dui:false,
	      du:[],
	      ssjg:"你搜索的结果不存在"
		}
	},
    computed:{
    	 zj(){
    	 	  let zh=0
    	 	  if(this.bool){
    	 	for(let i=0;i<this.$store.state.arr.length;i++){
    	 		zh+=this.$store.state.arr[i].li.sl*this.$store.state.arr[i].li.nw
    	 	}
    	 	return zh
    	 	  }else{
    	 	  	return 0
    	 	  }
    	 }
    },
     methods:{
     	duicuo(i){
     	
     		this.dc[i].li.ind=!this.dc[i].li.ind
     	},
     	duigou(){
     	 this.bool=!this.bool
         
     	},
     	shanchu(){
     		let a=this.$store.state.arr.length
     		for(var i=0;i<a;i++){
     			
     			if(this.$store.state.arr[i].li.ind){
     				
     				this.$store.state.arr.splice(i,1)
     				i--
     			}
     			
     		}
     		
     	},
     	d(){
     		this.dui=!this.dui
     		for(let i=0;i<this.$store.state.arr.length;i++){
     			if(this.dui){
     				this.$store.state.arr[i].li.ind=true
     			}else{
     				this.$store.state.arr[i].li.ind=false
     			}
     		}
     	},
       jia(i){
       	
       	this.$store.state.arr[i].li.sl++
       	
       },
       jian(i){
       	if(this.$store.state.arr[i].li.sl==1){
       		return
       	}
       	
        this.$store.commit('jian',i)
    	 	
       	
       },
       sc(i){
       	this.$store.state.arr.splice(i,1)
       }
 }
    }


</script>

<style>
.gouwuche-m-left .gouwuche-m-left-duihao{
	position: absolute;
	left: 83px;
}
.gouwuche-m-left{
 float: left;
 height: 28px;
 margin-top: 40px;
}
.gouwuche-m-left ul li img{
	height: 14px;
	width: 14px;
}
.gouwuche-m-left ul li span{
	padding-left: 10px;
}
.gouwuche-m-left ul li{
	float: left;
	margin-left: 40px;
}
.gouwuche-m{
	height: 140px;
	width: 1200px;
	margin-left: 43px;
}
.hade-m .hade-m-d{
	position: absolute;
	height: 100px;
	height: 100px;
    left: 0px;
    background: red;

}
.hade-m-duigou{
	height: 14px;
	height: 14px;
    left: 0px;
	position: absolute;
}
.gouwuche-box-duigou{
	height: 14px;
	width: 14px;
	position: absolute;
	left: 0px;
	top: 0px;
}
.gouwuche{
	position: relative;
}
.gouwuche-box img{
	display: block;
	float: left;
}
.gouwuche-box .gouwuche-box-icon{
	margin-left: 36px;
	margin-top: 30px;
	width: 14px;
	height: 14px;
}
.gouwuche-box-item{
	display: block;
	float: left;
	width:211px;
font-size:14px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:20px;
margin-left: 20px;
margin-top: 30px;
}
.gouwuche-box .gouwuche-box-zhutu{
	width: 140px;
	height: 140px;
	margin-top: 30px;
	margin-left: 20px;
}
.gouwuche-box-jiage,.gouwuche-box-sc{
	display: block;
	float: left;
}
.gouwuche-box-jiage{
	margin-left: 214px;
	margin-top: 30px;
}
.gouwuche-box-jiage-one{
	font-size:14px;
font-family:PingFangSC-Semibold;
color:rgba(153,153,153,1);
line-height:20px;
}
.gouwuche-box-jiage-two{
	font-size:18px;
font-family:PingFangSC-Semibold;
color:rgba(51,51,51,1);
line-height:25px;
margin-top: 10px;
}
.gouwuche-box-jian{
	margin-left: 55px;
	margin-top: 36px;
	width: 20px;
	height: 20px;
}
.gouwuche-box-jia{
	margin-left: 20px;
	margin-top: 36px;
	width: 20px;
	height: 20px;
}
.gouwuche-box .gouwuche-box-number{
	display: block;
	float: left;
	margin-top: 30px;
	margin-left: 20px;
	width:10px;
height:33px;
font-size:24px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:33px;
}
.gouwuche-box-jiage span,.gouwuche-box-sc span{
	display: block;
}	
.gouwuche-box{
	height: 200px;
	width: 1200px;
	margin-top: 20px;
	background:rgba(250,250,250,1);
	
}
.gouwuche-box .gouwuche-box-zj{
	display: block;
	float: left;
	width:99px;
height:25px;
font-size:18px;
font-family:PingFangSC-Semibold;
color:rgba(255,103,0,1);
line-height:25px;
margin-left: 68px;
margin-top: 30px;
}	
.gouwuche .gouwuche-title img{
	height: 14px;
	width: 14px;
}
.gouwuche .gouwuche-title span{
	font-size:14px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:20px;
margin-left: 10px;
}
.gouwuche{
	 width: 1200px;
	 height: 240px;
	 margin-left: 83px;	
	 margin-top: 40px;
	}
.hade-m{
	height: 20px;
	width: 1366px;
	position: relative;
}
.hade-m img{
	height: 14px;
	width: 14px;
	margin-left: 83px;
}
.hade{
	width:1366px;
height:100px;
background:rgba(255,255,255,1);
}
.hade-left{
	margin-left: 101px;
	margin-top: 33px;
}
.hade-left li{
	float: left;
	width:120px;
	height: 76px;
	font-size:16px;
     font-family:PingFangSC-Semibold;
     color:rgba(153,153,153,1);
     line-height:22px;
}
.hade-left li div{
	width:120px;
    height:2px;
    background: rgba(153,153,153,1);
    margin-left: -20px;
    margin-top: 10px;
}
.hade-left li .hade-left-bul{
	background: rgba(41,98,255,1);
}
.hade-left .hade-li-bul{
	color:rgba(41,98,255,1)
}
.hade-right{
	margin-left: 1033px;
	margin-top: 44px;
	font-size:12px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    line-height:17px;
}
.hade-right-text{
	width: 120px;
	height: 17px;
	display: block;
	float: left;
}

.hade-right-many{
	display: block;
	float:left;
	color:rgba(255,103,0,1);
}
.hade-right-buttom{
	float: left;
	width:60px;
height:36px;
background:rgba(153,153,153,1);
text-align: center;
line-height: 36px;
margin-left: 20px;
margin-top: -10px;
font-size:14px;
font-family:PingFangSC-Regular;
color:rgba(255,255,255,1);
}
.gouwuche-box .gouwuche-box-sc{
	margin-top: 20px;
	margin-left: 51px;
	font-size:18px;
font-family:PingFangSC-Regular;
color:rgba(51,51,51,1);
line-height:25px;
}
.gouwuche-box .gouwuche-box-sc span{
	margin-top: 10px;
}
.hade-m span{
font-size:14px;
font-family:PingFangSC-Semibold;
color:rgba(153,153,153,1);
line-height:20px;	
}
.hade-m .qx{
	margin-left: 10px;
}
.hade-m .spxx{
	margin-left: 118px;
}
.hade-m .dj{
	margin-left: 442px;
}
.hade-m .sl,.hade-m .je,.hade-m .cz{
	margin-left: 120px;
}
</style>
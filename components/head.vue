<template>
   	   <div class="head-m">
   	   	 <div class="logo">
   	   	 	 <div class="img">
   	   	 	 	  <img src="../assets/img/icon_001_logo_60_normal@2x.png" />
   	   	 	 </div>
   	   	 	 <span class="plwh">霹雳五号</span>
   	   	 	 <span class="pzgbsh">品质改变生活</span>
   	   	 </div>
   	   	 <div class="ss" ref="gb" v-if="this.sj">
   	   	 	<ul>
   	   	 		<li v-for="item in sssj"
   	   	 			@click="sq($event)"
   	   	 			>
   	   	 			{{item}}
   	   	 		</li>
   	   	 		<li v-if="!this.sssj.length">
   	   	 			 <slot></slot>
   	   	 		</li>
   	   	 	</ul>
   	   	 </div>
   	   	 <div class="title">
   	   	 	  <ul>
   	   	 	 	<li>霹雳五号</li>
   	   	 	 	<li>机械五金</li>
   	   	 	 	<li>天天向上</li>
   	   	 	 	<li>好好学习</li>
   	   	 	 	<li>好好学习</li>
   	   	 	 </ul>
   	   	 </div>
   	   	 <div class="input">
   	   	 	<input placeholder="请输入你要搜索的商品名称"
   	   	 		   
   	   	 		 v-model="sj" type="text" />
   	   	 	<button>搜索</button>
   	   	 </div>
   	   </div>
</template>
<script>
	
	import axios from 'axios'
	export default {

	data(){
		return{
		  sj:'',
		  cslb:' ',
		  sssj:[]
		}
	},
	
	methods:{
	    sq(e){
	    	
             alert("跳到"+e.target.innerHTML+"相对应产品的详情页")
	    },
		getres(){
				axios.get('https://route.showapi.com/181-1').then(this.getsucc)
			},
			getsucc(res){
				
				console.log(res)
			},
	},

	mounted(){
			this.getres()
	
		},
 watch: {
       	sj(){

       		if (!this.sj) {
               this.sssj = []
        return
      }
       		const result = []
       		for (let i in this.cslb) {
       			 this.cslb[i].forEach((value) => {
       			 	 if (value.spell.indexOf(this.sj) > -1 || value.name.indexOf(this.sj) > -1) {
              result.push(value.name)}
       			 	
       			 })
       		}
       		this.sssj=result
       		console.log(this.$refs.gb.clientHeight)
       	}
      }		
	}
</script>

<style scoped>
	  .head-m{
  	position: relative;
  	width:1366px;
    height:100px;
    background:rgba(255,255,255,1);
  }
  .logo{
  	width: 176px;
  	height: 80px;
    position: absolute;
    left: 83px;
   
  }
  .head-m .logo .img{
  	float: left;
  	width: 60px;
  	height: 60px;
    margin-top: 20px;
  	
  }
   .head-m .logo span{
   	float: left;
   	display: block;
   }
   .plwh{
   	margin-top: 21px;
   	margin-left: 20px;
   	width:96px;
    height:33px;
    font-size:24px;
    font-family:PingFangSC-Medium;
    color:rgba(51,51,51,1);
    line-height:33px;
   }
 .pzgbsh{
 	  width:92px;
    height:17px;
    font-size:12px;
    font-family:PingFangSC-Medium;
    color:rgba(51,51,51,1);
    line-height:17px;
    margin-top: 6px;
    margin-left: 20px;
    letter-spacing: 3.3px;
 }
 .head-m .title {
 	position: absolute;
  left: 434px;
 }
 .head-m .title ul li{
 	margin-top: 66px;
    width:48px;
    height:17px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    line-height:17px; 
    float: left;
    margin-left: 17px;
 }
 .input{
 	position: absolute;
 	width: 480px;
 	height: 40px;
 	left: 451px;
 
 }
 input{
 	border:1px solid rgba(224,224,224,1);
 	width:404px;
  height:40px;
  margin-top: 20px;
  box-sizing: border-box;
  font-size:14px;
  font-family:PingFangSC-Regular;
  color:rgba(153,153,153,1);
  line-height:20px;
  background-image: url(../assets/img/icon_001_search_24_normal@2x.png) ;
  background-repeat:no-repeat;
  background-size:24px 24px;
  background-position-y: center;
  background-position-x: 10px;
  text-indent: 44px;
 }
 button{
 	width:60px;
  height:40px;
  background:rgba(41,98,255,1);
  border:0;
  margin-left: 0;
  font-size:16px;
font-family:PingFangSC-Regular;
color:rgba(255,255,255,1);
line-height:22px;
box-sizing: border-box;
 }
 .img-wxh{
 	width: 90px;
 	position: absolute;
 	top: 145px;
 	left: 855px;
 	}
.ss{
	
	width: 404px;
	max-height:350px;
	overflow: scroll;
 	position: absolute;
 	left:451px;
 	background:white;
 	z-index:10000;
 	top:60px
} 
.ss ul li{
	margin-left: 10px;
	line-height:30px;
	color:rgba(255,255,255);
	 font-size:16px;
}
.ss ul{
	margin-top: 12px;
}	
</style >
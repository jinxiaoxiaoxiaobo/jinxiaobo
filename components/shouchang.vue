<template>
	<div>
	    <div class="gl">
	    	<div class='qx'@click="qx" ref='q'>全选</div>
	    	<div class="sc" @click="sc" ref='s'>删除</div>
	    	<div class="qxgl" @click="gl($event)">管理</div>
	    </div>
	    <div class="box">
	    	<ul>
	    		<li v-for="(itrm,index) of boxli" v-if="boxli[index].boole">
	    			
	    			<div ref="zzbox" class="zz">
	    				<div  class="zz_box">
	    					<div ref='mmbox' class="zz_smbox" @click="mbox($event)">Yes</div>
	    				</div>
	    			</div>
	    		</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
	export default {

	data(){
		return{
		  boxli:[{"boole":1},{"boole":1},{"boole":2},{"boole":3},{"boole":4},{"boole":5},{"boole":6},{"boole":7}],
		  br:true,
		  be:false,
		  boxitem:false,
		  bbbb:[]
		}
	},
	 methods:{
	 	
	 	mbox(e){
	 	 if(e.target.innerHTML=="Yes"){
	 	 	e.target.innerHTML="No"
	 	 }else{
	 	 	e.target.innerHTML="Yes"
	 	 }
	 	},
	 	qx(){
	 	    
	 		this.be=!this.be
	 		
	 		if(this.be){
	 			this.$refs.q.style.color="red"
	 			for(let i=0;i<this.$refs.zzbox.length;i++){
	 			this.$refs.zzbox[i].style.display="block"
	 		}
	 			
	 		}else{
	 			this.$refs.q.style.color="rgba(153,153,153,1)"
                       for(let i=0;i<this.$refs.zzbox.length;i++){
	 			this.$refs.zzbox[i].style.display="none"
	 		}
	 		}
	 	},
	 	sc(){
	 		if(this.be){
	 		
	 			for(let i=0;i<this.$refs.mmbox.length;i++){
	 			if(this.$refs.mmbox[i].innerHTML=="Yes"){
	 			this.boxli[i].boole=false
	 			
	 			}
	 		}
	 		}else{
	 			alert("你还没有选择")
	 		}
	 		
	 			
	 		
	 	
	 		
	 		
	 	},
	 	gl(e){
	 		if(this.br){
	 			this.br=!this.br
	 			e.target.innerHTML="取消管理"
	 			this.$refs.s.style.display="block"
	 			this.$refs.q.style.display="block"
	 		}else{
	 			this.br=!this.br
	 			e.target.innerHTML="管理"
	 			this.$refs.s.style.display="none"
	 			this.$refs.q.style.display="none"
	 		}
	 	}
	 }
	}
</script>

<style>
	.zz{
				width:285px;
 height:350px;
background:rgba(0,0,0,0.4);
float: left;
display: none;
position: absolute;

	}
	.zz .zz_box{
		height: 50px;
		width: 50px;
	
		background:rgba(0,0,0,0.8);
		z-index: 10;
	}
	.zz .zz_box .zz_smbox{
		height: 25px;
		width: 25px;
		position: absolute;
		top: 11px;
		color: white;
		text-align: center;
		line-height: 25px;
		left: 11px;
		border: 1.5px solid white;
	}
	.gl{
		height: 100px;
		width: 1366px;
		margin-top: 80px;
		position: relative;
	}
	.qxgl{
		position: absolute;
		width:56px;
height:20px;
font-size:14px;
font-family:PingFangSC-Semibold;
color:rgba(153,153,153,1);
line-height:20px;
top: 40px;
left: 1227px;
	}
	.sc{
		display: none;
		position: absolute;
		width:28px;
height:20px;
font-size:14px;
font-family:PingFangSC-Semibold;
color:rgba(153,153,153,1);
line-height:20px;
left: 1131px;
top: 40px;
	}
	.qx{
		display: none;
		position: absolute;
		width:28px;
height:20px;
font-size:14px;
font-family:PingFangSC-Semibold;
color:rgba(153,153,153,1);
line-height:20px;
top: 40px;
left: 1040px;
	}
	.box{
		height: 820px;
		width: 1366px;
		background:rgba(250,250,250,1);
	}
	.box ul li{
		position: relative;
		width:285px;
height:350px;
background:red;
float: left;
margin-left: 20px;
margin-top: 40px;
	}
	.box ul{
		margin-left: 63px;
	}
</style>
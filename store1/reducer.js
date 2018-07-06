const defaultState={
	
	value:'',
	list:[]
}
export default (state=defaultState,action)=>{
	if(action.type=="xgipt"){
		const newState=JSON.parse(JSON.stringify(state))
		newState.value=action.value
		return newState
	}
	if(action.type=="tj"){
		const newState=JSON.parse(JSON.stringify(state))
		newState.list.push(newState.value)
		newState.value=""
		return newState
	}
	if(action.type=="shanchu"){
		const newState=JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)
		
		return newState
	}
	return state
}

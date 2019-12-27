const mutations = {
	// 获取活动控制
	GET_ACTION_CTRL(state,index){
		state.DISCOUNT = index.DISCOUNT; //折扣价
		state.IS_SHOW_DISCOUNT = index.IS_SHOW_DISCOUNT; //是否显示折扣
		state.PREHEAT = index.PREHEAT; //是否预热状态
		state.DOUBLE_TENTH = index.DOUBLE_TENTH; //是否双十一当天
		state.IS_BACK = index.IS_BACK; //是否返场
	},
}

export default mutations

const actions = {
	// 获取活动控制
	getActionCtrl({
		commit,
		state
	}, index) {
		commit('GET_ACTION_CTRL', index)
	},
}

export default actions

const reducer = (state = null, action) => {
	switch (action.type) {
		case 'NOTIFY':
			return action.message
		default:
			return state
	}
}

export const notify = (message, style) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({
				type: 'NOTIFY',
				message: null
			})
		}, 3000)
		dispatch({
			type: 'NOTIFY',
			message: {
				message, style
			}
		})
	}
}

export default reducer
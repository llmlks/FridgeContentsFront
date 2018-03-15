const reducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_FRIDGE':
			return state.concat(action.fridge)
		case 'DELETE_FRIDGE':
			return state.filter(f => f.id !== action.id)
		default:
			return state
	}
}

export default reducer
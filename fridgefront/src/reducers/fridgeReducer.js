import fridgeService from '../services/fridges'

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'INITIALISE_FRIDGES':
			return action.data
		case 'NEW_FRIDGE':
			return state.concat(action.fridge)
		case 'DELETE_FRIDGE':
			return state.filter(f => f.id !== action.id)
		default:
			return state
	}
}

export const initialiseFridges = () => {
	return async (dispatch) => {
		const response = await fridgeService.getAll()
		dispatch({
			type: 'INITIALISE_FRIDGES',
			data: response
		})
	}
}

export const createFridge = (newFridge) => {
	return async (dispatch) => {
		const response = await fridgeService.create(newFridge)
		dispatch({
			type: 'NEW_FRIDGE',
			fridge: response
		})
	}
}

export const deleteFridge = (id) => {
	return async (dispatch) => {
		await fridgeService.remove(id)
		dispatch({
			type: 'DELETE_FRIDGE',
			id
		})
	}
}

export default reducer
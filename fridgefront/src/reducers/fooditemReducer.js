import fooditemService from '../services/fooditems'

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_ITEM':
			return state.concat(action.data)
		case 'INITIALISE_ITEMS':
			return action.data
		case 'DELETE_ITEM':
			return state.filter(f => f.id !== action.id)
		case 'UPDATE_ITEM':
			return state.map(f => f.id === action.data.id ? action.data : f)
		default:
			return state
	}
}

export const createFooditem = (newItem) => {
	return async (dispatch) => {
		const response = await fooditemService.create(newItem)
		dispatch({
			type: 'NEW_ITEM',
			data: response
		})
	}
}

export const initialiseFooditems = () => {
	return async (dispatch) => {
		const response = await fooditemService.getAll()
		dispatch({
			type: 'INITIALISE_ITEMS',
			data: response
		})
	}
}

export const deleteFooditem = (id) => {
	return async (dispatch) => {
		await fooditemService.remove(id)
		dispatch({
			type: 'DELETE_ITEM',
			id
		})
	}
}

export const updateFooditem = (updated) => {
	return async (dispatch) => {
		const response = await fooditemService.update(updated)
		dispatch({
			type: 'UPDATE_ITEM',
			data: response
		})
	}
}

export default reducer
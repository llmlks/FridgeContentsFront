import axios from 'axios'
const baseUrl = '/api/fooditems'

let token = null

const setToken = (newToken) => {
	token = `Bearer ${newToken}`
}

const getAll = async () => {
	const config = {
		headers: {
			'Authorization': token
		}
	}

	const response = await axios.get(baseUrl, config)
	return response.data
}

const create = async (newItem) => {
	const config = {
		headers: {
			'Authorization': token
		}
	}

	const response = await axios.post(baseUrl, newItem, config)
	return response.data
}

const update = async (toUpdate) => {
	const config = {
		headers: {
			'Authorization': token
		}
	}

	const response = await axios.put(`${baseUrl}/${toUpdate.id}`, toUpdate, config)
	return response.data
}

const remove = async (toRemove) => {
	const config = {
		headers: {
			'Authorization': token
		}
	}

	const response = await axios.delete(`${baseUrl}/${toRemove}`, config)
	return response.data
}

export default { setToken, getAll, create, update, remove }
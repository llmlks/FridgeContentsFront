import axios from 'axios'
const baseUrl = '/api/fridges'

let token = null

const setToken = (newToken) => {
	token = `Bearer ${newToken}`
}

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getAllForUser = async (userID) => {
	const response = await axios.get(`${baseUrl}/user/${userID}`)
	return response.data
}

const create = async (newFridge) => {
	const config = {
		headers: {
			'Authorization': token
		}
	}

	const response = await axios.post(baseUrl, newFridge, config)
	return response.data
}

const remove = async (toDelete) => {
	const config = {
		headers: {
			'Authorization': token
		}
	}

	const response = await axios.delete(`${baseUrl}/${toDelete}`, config)
	return response.data
}

export default { getAll, getAllForUser, setToken, create, remove }
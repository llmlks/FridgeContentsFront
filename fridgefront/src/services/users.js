import axios from 'axios'
const baseUrl = '/api/users'
let token = null

const setToken = (newToken) => token = `Bearer ${newToken}`

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const create = async (credentials) => {
	const response = await axios.post(baseUrl, credentials)
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

export default { getAll, create, update, setToken }
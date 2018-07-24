const axios = require('axios')
const appConfig = require('../config/api')
const { baseURL } = appConfig

module.exports = {
	async get(endPoint, data) {
		return new Promise((resolve,reject)=>{
			axios.get(`${baseURL}${endPoint}`)
			.then(response => {
				resolve(response.data.results)
			})
			.catch(response => {
				reject("Api call failed!")
			})
		})
	}
}
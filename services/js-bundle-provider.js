export default {
	async getByUri(uri) {
		const res = await fetch(uri)
		return res.text()
	}
}
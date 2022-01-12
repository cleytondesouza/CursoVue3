export default httpClient => ({
    login: async ({ email, password }) => {
        const response = await httpClient.post('/auth/login', {
            email,
            password
        })
        return {
            data: response.data
        }
    }
})
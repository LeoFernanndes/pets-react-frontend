export default class HttpRequests {
    static getLocalStorageAuthHeaders(): {authToken: string | null, refreshToken: string | null} {
        const authToken = localStorage.getItem('authToken')
        const refreshToken = localStorage.getItem('refreshToken')
        return {
            authToken, refreshToken
        }
    }
}
import axios, {AxiosError} from "axios";

export interface AuthTokensStorageData {
    authToken: string;
    refreshToken: string;
    user: object
}

export interface LoginDto {
    username: string;
    password: string;
}

export default class Auth {
    static async login(loginDto: LoginDto): Promise<any> {
        try {
            const response = await axios.post('http://localhost:3001/pets/auth/login', loginDto)
            return {
                status: response.status,
                data: response.data,
                headers: response.headers
            }
        } catch (error: any) {
            console.log(error)
            return {
                status: error.response.status,
                data: error.response.data
            }
        }
    }

    static setAuthStorage(authTokenStorageData: AuthTokensStorageData){
        localStorage.setItem("authToken", authTokenStorageData.authToken)
        localStorage.setItem("refreshToken", authTokenStorageData.refreshToken)
        localStorage.setItem("user", JSON.stringify(authTokenStorageData.user))
    }
}
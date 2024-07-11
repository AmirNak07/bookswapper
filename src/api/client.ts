import type { RegisterRequest } from '@/api/models/register'
import type { ApiError } from '@/api/models/response'
import type { LoginRequest, LoginResponse } from '@/api/models/login'
import type { UserResponse } from '@/api/models/user'
import { ApiResponse } from '@/api/models/response'
import type { AxiosError, AxiosInstance } from 'axios'
import axios from 'axios'

export class ApiClient {
  baseURL: string = 'https://bs-api.linuxfight.me/api'
  axios: AxiosInstance

  constructor() {
    if (import.meta.env.DEV) {
      this.baseURL = 'http://localhost:5173/api'
    }
    this.axios = axios.create({
      baseURL: this.baseURL
    })
  }

  setToken(token: string) {
    this.axios = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  }
  
  public async ping(): Promise<string> {
    const response = await this.axios.get('/ping')
    return response.data
  }
  
  public async register(data: RegisterRequest): Promise<ApiResponse | ApiError> {
    const response = this.axios.post('/auth/register', data)
    return await response.then(data => {
      return data.data as ApiResponse
    }).catch((err: AxiosError) => {
      return err.response?.data as ApiError
    })
  }

  public async login(data: LoginRequest): Promise<LoginResponse | ApiError> {
    const response = this.axios.post('/auth/login', data)

    return await response.then(data => {
      return data.data as LoginResponse
    }).catch((err: AxiosError) => {
      return err.response?.data as ApiError
    })
  }

  public async GetMe(): Promise<UserResponse | ApiError> {
    const response = this.axios.get('/profiles/me')

    return await response.then(data => {
      return data.data as UserResponse
    }).catch((err: AxiosError) => {
      return err.response?.data as ApiError
    })
  }
}

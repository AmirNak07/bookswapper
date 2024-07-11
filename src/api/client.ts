import type { RegisterRequest } from '@/api/models/register'
import axios, { type AxiosInstance } from 'axios'
import type { ApiError } from '@/api/models/response'
import type { LoginRequest, LoginResponse } from '@/api/models/login'
import type { UserResponse } from '@/api/models/user'
import { ApiResponse } from '@/api/models/response'

export class ApiClient {
  baseURL: string
  axios: AxiosInstance
  
  constructor(baseURL: string = 'http://localhost:5173/api') { // 'https://bs-api.linuxfight.me/api'
    this.baseURL = baseURL
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
  
  public async Ping(): Promise<string> {
    const response = await this.axios.get('/ping')
    return response.data
  }
  
  public async Register(data: RegisterRequest): Promise<ApiResponse | ApiError> {
    const response = await this.axios.post('/auth/register', data)
    
    if (response.status == 200) {
      return response.data as ApiResponse
    }
    return response.data as ApiError
  }
  
  public async Login(data: LoginRequest): Promise<LoginResponse | ApiError> {
    const response = await this.axios.post('/auth/login', data)

    if (response.status == 200) {
      return response.data as LoginResponse
    }
    return response.data as ApiError
  }
  
  public async GetMe(): Promise<UserResponse | ApiError> {
    const response = await this.axios.get('/profiles/me')

    if (response.status == 200) {
      return response.data as UserResponse
    }
    return response.data as ApiError
  }
}

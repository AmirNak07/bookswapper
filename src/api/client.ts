import type { RegisterRequest } from '@/api/models/register'
import type { LoginRequest, LoginResponse } from '@/api/models/login'
import type { UserResponse } from '@/api/models/user'
import type { ApiResponse } from '@/api/models/response'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import type { CityResponse } from '@/api/models/city'

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
  
  public async register(data: RegisterRequest): Promise<ApiResponse> {
    const response = await this.axios.post<ApiResponse>('/auth/register', data)
    return response.data
  }

  public async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await this.axios.post<LoginResponse>('/auth/login', data)
    return response.data
  }

  public async GetMe(): Promise<UserResponse> {
    const response = await this.axios.get<UserResponse>('/profiles/me')
    return response.data
  }
  
  public async GetCities(): Promise<CityResponse> {
    const response = await this.axios.get<CityResponse>('/utils/allcities')
    return response.data
  }
  
  /*
  public async register(data: RegisterRequest): Promise<ApiResponse | AxiosError> {
    const response = this.axios.post<ApiResponse>('/auth/register', data)
    return await response.then(data => {
      return data.data
    }).catch((err: AxiosError) => {
      return err
    })
  }

  public async login(data: LoginRequest): Promise<LoginResponse | AxiosError> {
    const response = this.axios.post<LoginResponse>('/auth/login', data)

    return await response.then(data => {
      return data.data
    }).catch((err: AxiosError) => {
      return err
    })
  }

  public async GetMe(): Promise<UserResponse | AxiosError> {
    const response = this.axios.get<UserResponse>('/profiles/me')

    return await response.then(data => {
      return data.data
    }).catch((err: AxiosError) => {
      return err
    })
  }
  */
}

import type { RegisterRequest } from '@/api/models/register'
import type { LoginRequest, LoginResponse } from '@/api/models/login'
import type { UserResponse } from '@/api/models/user'
import { type ApiResponse } from '@/api/models/response'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import type { CityResponse } from '@/api/models/city'
import { TradeRequest, type TradeResponse } from '@/api/models/trade'

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
  
  public async register(data: RegisterRequest): Promise<ApiResponse | string> {
    try {
      const response = await this.axios.post<ApiResponse>('/auth/register', data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return JSON.stringify(error.response?.data);
      } else {
        return JSON.stringify(error);
      }
    }
  }

  public async login(data: LoginRequest): Promise<LoginResponse | string> {
    try {
      const response = await this.axios.post<LoginResponse>('/auth/login', data)
      return response.data 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return JSON.stringify(error.response?.data);
      } else {
        return JSON.stringify(error);
      }
    }
  }

  public async GetMe(): Promise<UserResponse | string> {
    try {
      const response = await this.axios.get<UserResponse>('/profiles/me')
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return JSON.stringify(error.response?.data);
      } else {
        return JSON.stringify(error);
      }
    }
  }

  public async GetTrades(): Promise<TradeResponse | string> {
    try {
      const response = await this.axios.get<TradeResponse>('/trades')
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return JSON.stringify(error.response?.data);
      } else {
        return JSON.stringify(error);
      }
    }
  }
  
  public async GetUser(userId: number): Promise<UserResponse | string> {
    try {
      const response = await this.axios.get<UserResponse>('/profiles/user?userId=' + userId)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return JSON.stringify(error.response?.data);
      } else {
        return JSON.stringify(error);
      }
    }
  }
  
  public async AddTrade(data: TradeRequest): Promise<ApiResponse | string> {
    try {
      const response = await this.axios.post<ApiResponse>('/trade', data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return JSON.stringify(error.response?.data);
      } else {
        return JSON.stringify(error);
      }
    }
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

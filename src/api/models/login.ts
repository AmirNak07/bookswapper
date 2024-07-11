export class LoginRequest {
  login: string
  password: string
  
  constructor(login: string, password: string) {
    this.login = login
    this.password = password
  }
}

export class LoginResponse {
  token: string
  
  constructor(token: string) {
    this.token = token
  }
}
export class RegisterRequest {
  login: string
  password: string
  username: string
  
  constructor(login: string, password: string, username: string) {
    this.login = login
    this.password = password
    this.username = username
  }
}
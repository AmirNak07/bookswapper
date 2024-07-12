export class RegisterRequest {
  login: string
  password: string
  username: string
  cityid: number
  
  constructor(login: string, password: string, username: string, cityId: number) {
    this.login = login
    this.password = password
    this.username = username
    this.cityid = cityId
  }
}
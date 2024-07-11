export class UserResponse {
  status: string
  data: User
  
  constructor(status: string, data: User) {
    this.status = status
    this.data = data
  }
}

export class User {
  login: string
  username: string
  join_date: Date
  
  constructor(login: string, username: string, join_date: Date) {
    this.login = login
    this.username = username
    this.join_date = join_date
  }
}
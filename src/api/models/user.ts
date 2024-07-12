export interface UserResponse {
  status: string
  data: User
}

export interface User {
  login: string
  username: string
  join_date: Date
  biography: string
  phone_number: string
  city: string
}
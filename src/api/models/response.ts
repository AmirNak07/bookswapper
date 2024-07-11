export class ApiError {
  status: string
  
  constructor(status: string) {
    this.status = status
  }
}

export class ApiResponse {
  status: string
  
  constructor(status: string) {
    this.status = status
  }
}
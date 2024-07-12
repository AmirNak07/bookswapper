export interface CityResponse {
  status: string
  data: {
    cities: City[]
  }
}

export interface City {
  id: number
  city: string
}
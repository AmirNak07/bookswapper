export class CityResponse {
  status: string
  data: {
    cities: City[]
  }
  
  constructor(status: string, cities: City[]) {
    this.status = status
    this.data = {
      cities: cities,
    }
  }
}

export class City {
  id: number
  city: string
  
  constructor(id: number, city: string) {
    this.id = id
    this.city = city
  }
}
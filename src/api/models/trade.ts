export interface Trade {
  id: string
  bookname: string
  description: string
  author_id: string
  author_name: string
}

export interface TradeData {
  trades: Trade[]
}

export interface TradeResponse {
  status: string
  data: TradeData
}

export class TradeRequest {
  bookname: string
  description: string
  
  constructor(bookname: string, description: string) {
    this.bookname = bookname
    this.description = description
  }
}
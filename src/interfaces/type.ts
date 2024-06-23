export type OrderItem = {
  id: number,
  name: string,
  price: number,
}

export type MenuOrder = OrderItem & {
  quantity: number
}
import { useState } from "react"
import { MenuOrder, OrderItem } from "../interfaces/type"


export const useOrder = () => {

  const [order, setOrder] = useState<MenuOrder[]>([])
  
  const addItem = (item: OrderItem) => {
    const existItem = order.find( orderItem => orderItem.id === item.id )
    if( existItem ) {
      const updateOrder = order.map( orderItem => orderItem.id === item.id
      ? { ...orderItem, quantity: orderItem.quantity + 1}
      : orderItem )
      setOrder( updateOrder )
    }else {
      const updateItem = { ...item, quantity: 1 }
      setOrder([...order, updateItem])
    }
  }
  
  const removeItem = (id: MenuOrder['id']) => {
    const deleteOrder = order.filter( order => order.id !== id )
    setOrder(deleteOrder)
  }
  
  
  
  return {
    order,
    addItem,
    removeItem
  }
}

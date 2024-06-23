import { OrderItem } from "../interfaces/type"

interface OrderProps {
  item: OrderItem,
  addItem: (item: OrderItem) => void
}

export const Order: React.FC<OrderProps> = ({
  item,
  addItem
}) => {
  return (
    <button
      onClick={() => addItem(item)} 
      className="flex justify-between border-2 border-purple-300 rounded-lg 
      text-xl p-2 w-full hover:bg-purple-200">
      <p>{item.name}</p>
      <p className="font-bold">S/.{item.price}</p>
    </button>
  )
}

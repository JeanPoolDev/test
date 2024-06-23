import { MenuOrder } from "../interfaces/type"

interface ConsumoProps{
  item: MenuOrder,
  removeItem: (id: MenuOrder['id']) => void
}

export const Consumo: React.FC<ConsumoProps> = ({
  item,
  removeItem
}) => {
  return (
    <div className="border-y-2 m-3 flex justify-between">

      <div>
        <p className="text-lg">{item.name} - S/.{item.price}</p>
        <p>Cantidad: {item.quantity} - S/.{item.price * item.quantity}</p>
      </div>

      <button
        onClick={() => removeItem(item.id)} 
        className="bg-red-500 text-white w-6 h-6 rounded-full mt-3">
        X
      </button>

    </div>
  )
}

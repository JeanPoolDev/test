import { Consumo } from "./components/Consumo"
import { Header } from "./components/Header"
import { Order } from "./components/Order"
import { menuItems } from "./db/data"
import { useOrder } from "./hooks/useOrder"

export const Test = () => {

  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <Header />

      <main className="grid sm:grid-cols-2 m-10">

        <div className="shadow-lg space-y-2">
          <h2 className="text-4xl font-bold">Menu</h2>
          {
            menuItems.map( item => (
              <Order 
                key={item.id}
                item={item}
                addItem={addItem} 
              />
            ))
          }
        </div>

        <div className="shadow-lg">
          <h2 className="text-4xl font-bold">Consumo</h2>
            {
              order.map( item => (
                <Consumo 
                  key={item.id}
                  item={item}
                  removeItem={removeItem} 
                />
              ))
            }
        </div>

      </main>

    </>
  )
}

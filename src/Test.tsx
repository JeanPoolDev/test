import { Header } from "./components/Header"

export const Test = () => {
  return (
    <>
      <Header />

      <main className="grid grid-cols-2 mx-10">
        <div className="text-4xl font-bold">Menu</div>
        <div className="text-4xl font-bold">Consumo</div>
      </main>

    </>
  )
}

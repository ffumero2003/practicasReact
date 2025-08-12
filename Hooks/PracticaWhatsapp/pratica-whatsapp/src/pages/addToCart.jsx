import { useState } from "react"

function AddToCart(){

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const productos = [
    {name: "Laptop", price: 1200},
    {name: "Mouse Inalambrico", price: 25},
    {name: "Teclado Mecanico", price: 75},
    {name: "Monitor 27", price: 300}
  ]

  const handleAdd = (producto) => {
    setCart([...cart, producto])
    setTotal(prev => prev + producto.price)
  }

  const handleEliminate = (indexRemove) => {
    const productoEliminado = cart[indexRemove]
    setCart(cart.filter((_, index) => index !== indexRemove))
    setTotal(prev => prev - productoEliminado.price)
  }


  return(
    
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-[560px]  p-10 shadow-lg ">
          <h1 className="text-2xl text-green-800">Ejercicio 2: Carrito de Compras Interactivo (useState)</h1>
          <div className="flex mt-5 gap-3">
            <div className="w-1/2">
              <h2 className="text-xl font-semibold">Productos Disponibles</h2>
              {productos.map((prod, i) => {
                return(
                  <ul key={i} className="mt-2 flex justify-between items-center">
                    <li>{prod.name} - ${prod.price}</li>
                    <button onClick={() => handleAdd(prod)} className="px-2 py-1 bg-green-500 text-white rounded-lg">Añadir</button>
                  </ul>
                )
              })}
            </div>
            <div className="w-1/2">
              <h2 className="text-xl font-semibold">Tu Carrito</h2>
              {cart.length > 0 ? (
                cart.map((prod, i) => {
                  return(
                    <div key={i} className="mt-3 p-2 bg-blue-300 w-full rounded-lg flex justify-between items-center">
                      <h4>{prod.name} - {prod.price}</h4>
                      <button className="bg-red-400 p-1 rounded-lg" onClick={() => handleEliminate(i)}>Delete</button>
                    </div>
                  )
                })
              ) : (
                <p className="italic mt-2">El carrito esta vacio</p>
              )}

              <div className="flex justify-between p-4 bg-blue-200 mt-4 rounded-lg">
                <h3>Total:</h3>
                <p>${total}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddToCart
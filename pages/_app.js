import '@/styles/globals.css'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [carrito, setcarrito] = useState([])
  
  useEffect(() => {
   
    if (carrito.length !==0) {
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  
  }, [carrito])
  
  useEffect(() => {
    if (carrito.length === 0) {
      setcarrito(JSON.parse(localStorage.getItem('carrito')) || [])
    }
    
  }, [])
  

  const agregarCarrito = (producto) =>{
    
    if (carrito.length === 0 ) {
      setcarrito([producto])
    }

    if (carrito.some(guitarraState => guitarraState.nombre === producto.nombre)) {
      const carritoNuevo = carrito.map(guitarraState => guitarraState.nombre === producto.nombre ? producto : guitarraState)
      setcarrito(carritoNuevo)
    }else{
      setcarrito([...carrito, producto])
    }

  }

  const editarCarrito = (guitarra) =>{
    const nuevoCarrito = carrito.map(carritoState => carritoState.nombre === producto.nombre 
      ? guitarra : carritoState )
    
    setcarrito(nuevoCarrito)
  }

  const eliminarGuitarra = (guitarra) =>{
    const nuevoCarrito = carrito.filter(carritoState => carritoState.nombre !== guitarra.nombre)
    setcarrito(nuevoCarrito)
  }


  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    editarCarrito={editarCarrito}
    eliminarGuitarra={eliminarGuitarra}
  />
}

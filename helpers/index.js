
export const formatPrecio = (number) => {
    const precio = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
    return precio
}


export const formarFecha = (fecha) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    const formato = new Date(fecha)
    const fechaA = formato.toLocaleDateString('es-ES', opciones) // "Jul 2021 Friday"
    return fechaA
    //return 
}


import React from 'react'

export const resumenPedido = (carrito) => {
  const total = carrito.reduce((acumulador, guitarra)=> acumulador + (guitarra.precio*guitarra.cantidad), 0)
  return total
}


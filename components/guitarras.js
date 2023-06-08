import React from 'react'
import style from '../styles/tienda.module.css'
import ListadoGuitarras from './listadoGuitarras'

 const GuitarrasIndex = ({guitarras}) => {
    const {data} = guitarras
   
  return (
    <main className='contenedor'>
        <h2 className='heading'>Nuestra Coleccion</h2>
        <div className={style.contendorCards}>
          {
            data.map(guitarra => <ListadoGuitarras key={guitarra.id} guitarra={guitarra} />)
          }
        </div>
      </main>
  )
}


export default GuitarrasIndex
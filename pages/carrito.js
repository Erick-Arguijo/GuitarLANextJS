import Layout from '@/components/layout'
import Image from 'next/image'
import { formatPrecio, resumenPedido } from '@/helpers'
import style from '../styles/carrito.module.css'

const Carrito = ({carrito, agregarCarrito, eliminarGuitarra}) => {

  const agregar = (cantidad, guitarra) =>{
    const nuevaGuitarra = {
      ...guitarra,
      cantidad:cantidad
    }
    agregarCarrito(nuevaGuitarra)
  }



  return (
    <Layout 
      title='Carrito'
      description=''
    >
      <div className='contenedor'>
        <h2 className='heading'>Carrito</h2>
        <section className={style.container}>
          <div className={style.listado}>
            { carrito.length !==0 ?
              <div style={style.contenido}>
                <h3 className={style.titulo}>Lista de Articulos</h3>
                {
                  carrito.map(guitarra => 
                  <div className={style.card} key={guitarra.nombre}>
                    <Image  className={style.imagenCard} src={guitarra.imagen} alt={`guitar/${guitarra.nombre}`} width={200} height={200} />
                    <div className={style.contenidoCard}>
                      <h3>{guitarra.nombre}</h3>
                      <p className={style.disponible}>Disponible</p>
                      <p>Cantidad: </p>
                      <select className={style.select} defaultValue={guitarra.cantidad} onChange={(e)=>agregar(e.target.value, guitarra)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p class={style.precio}>{formatPrecio(guitarra.precio)}</p>
                      <p>Subtotal: 
                       <label className={style.precio}>
                       {formatPrecio(guitarra.precio* guitarra.cantidad)}
                        </label> 
                      </p>
                      <button className={style.eliminar} onClick={()=>eliminarGuitarra(guitarra)}>Eliminar</button>
                    </div>
                  </div> )
                }
              </div>
              :
              <div>
                <h3>Agrege guitarras al carrito</h3>
              </div>
            }
          </div>
          <div className={style.total}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar:
              <label className={style.totalPrecio}>
                {formatPrecio(resumenPedido(carrito))}
              </label>
            </p>
            {
              carrito.length>0 &&           
              <button className={style.pagar}>Pagar</button>
            }
          </div>
        </section>
      </div>

    </Layout>
  )
}

export default Carrito
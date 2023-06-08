import Layout from '@/components/layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from '../../styles/guitarra.module.css'
import { formatPrecio } from '@/helpers';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const Guitarra = ({respuesta, agregarCarrito}) => {
  const [cantidad, setcantidad] = useState('')
  const [error, seterror] = useState(false)
  const {nombre, descripcion, precio, imagen,updatedAt} =respuesta?.data[0].attributes
  const img = imagen.data.attributes.url;
  const router = useRouter()

  const addCar = () =>{
  
    if(cantidad!==''){
      const nuevaGuitarra = {
        nombre,
        precio,
        imagen: imagen.data.attributes.url,
        cantidad: parseInt(cantidad) 
      }
      seterror(false)

      agregarCarrito(nuevaGuitarra)
    }else{
      seterror(true)
    }

  }
  
  
  return (
    <Layout>
      <main className={`contenedor ${style.container}`}>
        <section>
          <Image className={style.img} src={img} alt='guitarra' width={200} height={300}/>
        </section>
        <section className={style.data}>
          <p className={style.nombre}>{nombre}</p>
          <p className={style.disponible}>Disponible</p>
          <p className={style.description}>{descripcion}</p>
          <p className={style.precio}>{formatPrecio(precio)}</p>
          <select className={style.select} onChange={(e) => setcantidad(e.target.value)}>
            <option value=''>--Seleccione Cantidad--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {
            error && (
            <div className={style.error}>
              Seleccione una cantidad valida
            </div>)
          }
          <Link href='/carrito' className={style.boton} onClick={()=> addCar()}>
            Agregar al Carrito
          </Link>
        </section>

      </main>

    </Layout>
  )
}

export default Guitarra




export const getStaticPaths = async () => {
  const peticion = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data} = await peticion.json()

  const rutas = data.map(route=> ({params: {url: route.attributes.url}}))

  return {
    paths: rutas,
    fallback: false, // false or "blocking"
  };
}

export const getStaticProps = async ({params}) => {

  const peticion = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${params.url}&populate=imagen`)
  const respuesta = await peticion.json();
  
  return { props: { respuesta } };
  
}



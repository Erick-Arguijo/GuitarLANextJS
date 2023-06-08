import Layout from '@/components/layout'
import ListadoGuitarras from '@/components/listadoGuitarras';
import { GetStaticProps } from 'next';
import style from '../../styles/tienda.module.css'

const Guitarras = ({respuesta}) => {
  const {data} = respuesta

  return (
    <Layout
      title='Tienda'
      description=''
    >
      <main className='contenedor'>
        <h2 className='heading'>Nuestra Coleccion</h2>
        <div className={style.contendorCards}>
          {
            data.map(guitarra => <ListadoGuitarras key={guitarra.id} guitarra={guitarra} />)
          }
        </div>
      </main>

    </Layout>
  )
}


export const getStaticProps = async () => {
  const peticion = await fetch('http://localhost:1337/api/guitarras?populate=imagen')
  const respuesta = await peticion.json()
  return {props:{respuesta}}
}



export default Guitarras
import Layout from '@/components/layout'
import Cursos from '@/components/listadoCursos'
import { GetServerSideProps } from 'next'
import style from '../../styles/blog.module.css'

const Blog = ({respuesta}) => {
  const cursos = respuesta.data
  return (
    <Layout
      title='Blog'
      description='Blog de musica, Venta de guitarras, consejos, GuitarLA'
    >
      <main className='contenedor'>
        <h2 className='heading'>Cursos</h2>
        <div className={style.listaCard}>
          {
            cursos.map(curso=> <Cursos key={curso.id} curso={curso} />)
          }
        </div>
      </main>

    </Layout>
  )
}


export const getServerSideProps = async () => {
  const peticion = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const respuesta = await peticion.json()
  return {props:{respuesta}}
}


export default Blog


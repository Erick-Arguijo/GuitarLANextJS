import React from 'react'
import Cursos from './listadoCursos'
import style from '../styles/blog.module.css'

const BlogIndex = ({posts}) => {
    const {data} = posts
  return (
    <main className='contenedor'>
        <h2 className='heading'>Cursos</h2>
        <div className={style.listaCard}>
          {
            data.map(curso=> <Cursos key={curso.id} curso={curso} />)
          }
        </div>
      </main>
  )
}

export default BlogIndex
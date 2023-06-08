import Layout from '@/components/layout'
import Image from 'next/image'
import React from 'react'
import style from '../../styles/blog.module.css'
import { formarFecha } from '@/helpers'

const Blog = ({respuesta}) => {

    const {titulo, contenido, updatedAt, imagen} = respuesta?.data[0].attributes
    const img = imagen?.data.attributes.formats.medium.url;
    return (
    <Layout>
        <div className='contenido'>
            <h2 className='heading'>{titulo}</h2>
            <Image className={style.imgCurso} src={img} alt={'contenido'} width={600} height={300} />
            <section className={style.section}>
                <p className={style.fecha}>{formarFecha(updatedAt)}</p>
                <p>{contenido}</p>
            </section>
        </div>
    </Layout>
  )
}

export default Blog




export const getStaticPaths = async () => {
    const peticion = await fetch(`${process.env.API_URL}/posts`)
    const {data} = await peticion.json()
    const params2 = data.map(curso => ({params:{blogUrl:curso.attributes.url}}))
    return {paths: params2,fallback: true}
}


export const getStaticProps = async({params}) => {
    const peticion = await fetch(`${process.env.API_URL}/posts?filters[url]=${params.blogUrl}&populate=imagen`)
    const respuesta = await peticion.json()
    return {props:{respuesta}}
}



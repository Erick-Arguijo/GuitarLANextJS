import Layout from '@/components/layout'
import React from 'react'
import img from '../public/img/notFound.png'
import Image from 'next/image'
import style from '../styles/notFound.module.css'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  return (
    <Layout
      title='Pagina No Encontrada'
    >
      <div>
        <Image className={style.img} src={img} alt="notfound" width={500} height={500}/>
        <button className={style.boton} onClick={()=> router.push('/') }>
            Pagina principal
        </button>
      </div>

    </Layout>
  )
}

export default NotFound
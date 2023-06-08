import Layout from "@/components/layout";
import { GetStaticProps } from "next";
import GuitarrasIndex from "@/components/guitarras";
import BlogIndex from "@/components/blogIndex";
import Curso from "@/components/curso";



export default function Home({ guitarras, posts, curso }) {
  
  return (
    <>
      <Layout
        title="Inicio"
        description="Blog de música, venta de guitarras y mas"
      >
        <div>
              <GuitarrasIndex guitarras={guitarras} />
              <Curso curso={curso}/>
              <BlogIndex posts={posts}/>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const getGuitarras = async () => {
    const peticion = await fetch(
      `${process.env.API_URL}/guitarras?populate=imagen`
    );
    const respuesta = await peticion.json();
    return respuesta;
  };

  const getPosts = async () => {
    const peticion = await fetch(
      `${process.env.API_URL}/posts?populate=imagen`
    );
    const respuesta = await peticion.json();
    return respuesta;
  };

  const getCurso = async () =>{
      const peticion = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
      const respuesta = await peticion.json()
      return respuesta
  }

  const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()]);

  return { props: { guitarras, posts, curso } };
};

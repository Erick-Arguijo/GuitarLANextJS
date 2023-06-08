import Image from "next/image";
import style from "../styles/blog.module.css";
import { formarFecha } from "@/helpers";
import { useRouter } from "next/router";

const Cursos = ({ curso }) => {
  const router = useRouter()
  const { titulo, contenido, updatedAt, url, imagen } = curso.attributes;
  const img = imagen?.data.attributes.formats.medium.url;

  return (
    <div className={style.card}>
      <Image
        className={style.cardBackground}
        src={img}
        alt="imgCurso"
        width={300}
        height={500}
      />

      <div className={style.cardContent}>
        <div className={style.cardContentContainer}>
          <h2 className={style.cardTitle}>{titulo}</h2>
          <span>{formarFecha(updatedAt)}</span>
          <p className={style.cardDescription}>{contenido}</p>
        </div>
        <button className={style.button} onClick={()=>router.push(`/blog/${url}`)}>
          Continuar
          <div className={style.arrowWrapper}>
            <div className={style.arrow}></div>
          </div>
        </button>
        
      </div>
    </div>
  );
};

export default Cursos;

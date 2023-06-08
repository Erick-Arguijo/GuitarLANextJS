import Image from "next/image";
import { formatPrecio } from "@/helpers";
import Link from "next/link";
import style from "../styles/tienda.module.css";

const ListadoGuitarras = ({ guitarra }) => {
  const { nombre, descripcion, precio, updatedAt, imagen, url } = guitarra.attributes;
  const img = imagen.data.attributes.formats.medium.url;

  return (
    <div className={style.card}>
      <Image src={`${img}`} alt="imgcard" width={100} height={100} />
      <h2>{nombre}</h2>
      <p className={style.disponible}>Disponible</p>
      <p className={style.precio}>{formatPrecio(precio)}</p>
      <p className={style.description}>{descripcion}</p>
      <Link href={`/guitarras/${url}`}>
        <button className={style.button}>
            Continuar
            <div className={style.arrowWrapper}>
            <div className={style.arrow}></div>
            </div>
        </button>
      </Link>
    </div>
  );
};

export default ListadoGuitarras;

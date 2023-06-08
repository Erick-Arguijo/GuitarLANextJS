import Link from "next/link";
import style from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={style.footer}>
      <section className={style.navegacion}>
        <ul className={style.enlaces}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </section>
      <section className={style.copy}>
        <h2>&copy; 2023 GuitarLa. Todos los derechos reservados </h2>
      </section>
      <section className={style.redesSociales}>
        <h2>Redes Sociales</h2>
        <ul>
          <li>
            <Link href="#">
            <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link href="#">
            <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link href="#">
            <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon icon={faTiktok} />
            </Link>
          </li>

        </ul>
      </section>
    </div>
  );
};

export default Footer;

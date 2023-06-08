import Link from "next/link";
import React from "react";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  usePathname } from 'next/navigation';
import Image from "next/image"

import style from '../styles/header.module.css'
const Header = () => {
  const pathname = usePathname();

  return (
    <nav className={style.contenedor}>
      <section className={style.img}>
        <Link href="/">
          <Image  
              src="/img/logo.svg"
              alt="imagenLogo"
              width={300}
              height={200}
              priority="true"
          />
        </Link>
      </section>
      <section className={style.sectionEnlaces}>
        <ul className={style.enlaces}>
          <li>
            <Link href="/" className={pathname==='/' && style.activo}>Inicio</Link>
          </li>
          <li>
            <Link href="/guitarras" className={pathname==='/guitarras' && style.activo}>Tienda</Link>
          </li>
          <li>
            <Link href="/blog" className={pathname==='/blog' && style.activo}>Blog</Link>
          </li>
          <li>
            <Link href="/nosotros" className={pathname==='/nosotros' && style.activo}>Nosotros</Link>
          </li>
          <li>
            <Link href="/carrito" className={pathname==='/carrito' && style.activo}>
            <FontAwesomeIcon className={style.iconCarrito} icon={faBagShopping} /> 
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Header;

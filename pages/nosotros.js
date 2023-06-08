import Layout from "@/components/layout";
import Image from "next/image";
import style from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de musica "}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={style.container}>
          <Image
            className={style.img}
            src={`/img/nosotros.jpg`}
            width={400}
            height={400}
            alt="imgNosotros"
          />
          <div className={style.lorem}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque diam arcu, ornare nec nulla sit amet, suscipit porta
              enim. Pellentesque consequat congue dolor, non placerat neque
              ultrices ut. Ut tristique ultricies ante eget convallis. Praesent
              eleifend ipsum id turpis consequat, at accumsan nunc iaculis. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
            <p>
              Nullam quis elementum mauris. Mauris eget scelerisque turpis.
              Donec dictum tristique sem, id porttitor mauris porta eu.
              Suspendisse lectus nunc, ultricies vel aliquet in, aliquam a est.
              Integer leo nisl, tincidunt eu nunc vel, aliquet vehicula purus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Sed commodo mi vel magna pharetra
              elementum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;

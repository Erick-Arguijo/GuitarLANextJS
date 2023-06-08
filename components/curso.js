import style from '../styles/curso.module.css';

const Curso = ({curso}) => {
    const {titulo, contenido, imagen,updatedAt} = curso.data.attributes
    const urlImg = imagen.data.attributes.url
    console.log(imagen)
  return (
    <section className={`${style.curso} curso`}>
        <style jsx>{`
            .curso{
                background-image:linear-gradient(to right, rgb(0 0 0/.65), rgb(0 0 0/.7)),url(${urlImg});
                background-repeat:no-repeat;
                background-size: cover;
                background-position:center ;
                
            }`}
        </style>
        <div></div>
        <div>
            <h2 className="heading">{titulo}</h2>
            <p>{contenido}</p>
        </div>
    </section>
  )
}

export default Curso
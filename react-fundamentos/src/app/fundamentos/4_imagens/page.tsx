import Image from "next/image" //do next, melhorar a imagem melhor que img

export default function Page(){

    const usuario = {
        nome: "Ana Maria",
        urlPerfil: "https://domineia.com/wp-content/uploads/2023/02/inteligencia-artificial-fotos.jpeg"
    }

    return(
        <div>
            <h1>Imagens</h1>
            <Image 
            src="/img/formula1.webp"
            alt={ "Nome: " + usuario.nome }
            width={300}
            height={300}
            />
            {/* <img
            // src={usuario.urlPerfil}
            src="/img/formula1.webp"
            alt={ "Nome: " + usuario.nome }
            style={ 
                {width:90, height: 90}
             }
             /> */}
        </div>
    )
}
import { Acomodacao, Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"
import PaginaSite from "@/components/PaginaSite"

export default function Pagina(){
    return (
        <PaginaSite 
        titulo="AirBnb"
        subtitulo="Minhas acomodações"
        >
            <h1>Página Acomodações</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Praesentium odio 
                    vero vel beatae ab odit dolorem 
                    doloremque dolores vitae? Provident 
                    illum at nesciunt, libero blanditiis 
                    laboriosam culpa repudiandae sint 
                    facere?
                </p>
        </PaginaSite>
    )
}
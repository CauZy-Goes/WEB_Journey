import Link from "next/link"

export function Acomodacao(){
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc. Perto da vinícola Góes</p>
        </div>
    )
}

export function Menu(){
    return (
        <div className="bg-gray-400">
            <MenuItem texto="Home" url="/inicio" />
            <MenuItem texto="Acomodações" url="/acomodacoes" />
            <MenuItem texto="Ajuda" url="/inicio" />
        </div>
    )
}

export function MenuItem( props: any ){
    return (
        <Link href={props.url} className="p-2">
            {props.texto}
        </Link>
    )
}

interface CabecalhoProps {
    titulo: string
    subtitulo: string
    className?: string //pode ter ou nao
}

export function Cabecalho( props: CabecalhoProps ){
    const classe = props.className ?? ""
    return (
        <div className={"p-3 " + classe }>
            <p>{props.titulo}</p>
            <p>{props.subtitulo}</p>
        </div>
    )
}

export function Rodape(){
    return (
        <div className="bg-blue-200">
            <p>Rodapé</p>
        </div>
    )
}

interface ConteudoProps {
    children: any
}

export function Conteudo( props:ConteudoProps ){
    return (
        <div className="bg-gray-200">
           {props.children}
        </div>
    )
}
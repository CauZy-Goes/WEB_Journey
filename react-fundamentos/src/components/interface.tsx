//componentes de interface

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
        <div className="bg-blue-700">
            Acomodações | Experiências
        </div>
    )
}

export function Cabecalho( props: any ){
    return (
        <div className="bg-blue-700">
            <h1>Logo</h1>
            <p>{props.titulo}</p>
            <p>{props.preco}</p>
            {Menu()}
        </div>
    )
}
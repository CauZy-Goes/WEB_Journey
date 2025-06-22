export default function Page(){

    const usuarios = [
        {id: 1, nome: "Jamilton", email: "j@gmail.com"},
        {id: 2, nome: "Ana", email: "a@gmail.com"},
        {id: 3, nome: "João", email: "j@gmail.com"},
        {id: 4, nome: "Maria", email: "m@gmail.com"},
        {id: 5, nome: "Carlos", email: "c@gmail.com"},
    ]

    const lista = usuarios.map( usuario =>
        <li key={usuario.id}>
            { usuario.nome } ( { usuario.email } )
        </li>
    )

    return(
        <ul>
            {lista}
        </ul>    
    )
}
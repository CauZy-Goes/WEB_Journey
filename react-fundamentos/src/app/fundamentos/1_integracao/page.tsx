export default function Page(){

    const regra = <h1>Maior de idade</h1>
    const nome = "Jamilton Damasceno"

    const lista = [
        <h1>Jamilton</h1>,
        <h1>Ana</h1>,
        <h1>Marcos</h1>,
    ]
    
    let salario = 1000
    let bonus = 200

    const usuario = {
        nome: "Jamilton",
        idade: "37",
    }

    function MeuBotao(){
        return(
            <button>Clique</button>
        )
    }

    return (
        <div>
            Olá, {lista[1]}
            O salário é: {salario + bonus}  
            O usuário é: {usuario.nome} idade: {usuario.idade} 
            { MeuBotao() } 
        </div>
    )
}
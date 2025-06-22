'use client'

import { useState } from "react"

export default function Page(){

    //let numero = 0
    let [numero, setNumero] = useState(0)
    function incrementar(){
        //numero += 1
        setNumero( numero + 1 )
        //console.log("número: " + numero)
    }

    function decrementar(){
        setNumero( numero - 1 )
    }

    return(
        <div>
            <h1 className="meuTexto">Estados</h1>
            <button 
            onClick={incrementar}
            className="bg-blue-400 p-2"
            >
                Incrementar
                </button> <br />

                <button 
            onClick={decrementar}
            className="bg-blue-400 p-2"
            >
                Decrementar
                </button>

        <p>Número: { numero }</p>

        </div>
    )
}
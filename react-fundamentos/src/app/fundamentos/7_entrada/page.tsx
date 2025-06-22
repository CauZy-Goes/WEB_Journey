'use client'

import { useState } from "react"

export default function Entrada(){

    const [valor,setValor] = useState("Digite Algo")

    function alterarValor(e : any){
        setValor(e.target.value)
    }

    return (
        <div className="p-2">
            <h1>Entrada de dados</h1>
            <input 
            value={valor}
            // onChange={e => setValor(e.target.value)}
            onChange={alterarValor}
            className="campo-texto"
            type="text" />
            <h1>{valor}</h1>
        </div>
    )
}
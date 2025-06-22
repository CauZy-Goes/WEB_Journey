'use client'

import { useState } from "react"

// peso / (altura * altura)
// <18 abaixo do peso
// 18 e 25 peso normal
// >25 Sobrepeso

export default function Entrada(){

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [resultado, setResultado] = useState('')

    function calcularImc(){

        const p = parseFloat(peso)
        const a = parseFloat(altura)

        const imc = p / (a * a)

        if( imc <= 18 ){
            setResultado("Abaixo do peso")
        }else if( imc>18 && imc < 25 ){
            setResultado("Peso normal")
        }else{
            setResultado("Sobrepeso")   
        }

    }

    return (
        <div className="p-2">
            <h1>Cálculo IMC</h1>
            <hr />

            <p>Digite seu peso</p>
            <input 
            value={peso}
            onChange={e=>setPeso(e.target.value)}
            placeholder="ex: 90"
            className="campo-texto"
            type="text" /> KG
            <br />

            <p>Digite sua altura</p>
            <input 
            value={altura}
            onChange={e=>setAltura(e.target.value)}
            placeholder="ex: 1.75"
            className="campo-texto"
            type="text" /> Metros
            <br /><br />

            <button 
            onClick={calcularImc}
            className="botao">
                Calcular
            </button>
            <br />

            <span>Resultado: {resultado} </span>


        </div>
    )
}
import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Page(){
    return(
        <div>
            <Cabecalho 
            titulo="São Roque, Brasil" 
            preco="R$ 350"
            />
            <hr />
            <Acomodacao />
            <Cabecalho 
            titulo="Campos do Jordão, Brasil" 
            preco="R$ 500"
            />
        </div>
    )
}
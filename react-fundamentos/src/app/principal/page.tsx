import { Acomodacao, Cabecalho, Menu } from "@/components/interface"

export default function Pagina(){
    return (
        <div>
            {Cabecalho()}
            <hr />
            {Acomodacao()}
            <hr />
        </div>
    )
}
/*
1) Desligar a torneira;
2) Pedir copo de água; 
3) Ir ao mercado comprar arroz;
*/

function calcularMedia(nota1, nota2){
    
    let totalNotas = nota1 + nota2 
    let media = totalNotas / 2
    
    return media
    
}

let media = calcularMedia(8,8)
let novaMedia = media + 1
console.log(novaMedia)
//desligarTorneira()
//let retorno = irMercadoComprarArroz(10)
//console.log(retorno)
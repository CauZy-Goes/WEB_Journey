// Tratamento de erros com Try Catch
function contarQuantidadeLetras(produto) {
  try {
    console.log(produto.nome.length)
    console.log("teste")
  } catch (erro) {
    //tratarErro( erro )
    console.log("Erro ao processar, código erro: 164")

  } /*finally {
    console.log("finally")
  }*/
}

function tratarErro(erro) {
  throw new Error("Código erro: 164")
}

const produto = {
  nom: "Notebook",
  preco: 1200
}

contarQuantidadeLetras(produto)
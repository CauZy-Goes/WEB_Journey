let nomes = [
	"jamilton",
	"josé",
	"letícia",
	"maria",
	"carlos",
	"pedro",
	"marcela",
	"carla",
	"carlos"
]

function pesquisarNome() {

	let nomePesquisa = document.getElementById('campoNome').value
	let intensLista = ''

	for (indice in nomes) {
		let nome = nomes[indice]
		if (nomePesquisa == nome) {
			intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`
		}
	}

	document.getElementById('lista').innerHTML = intensLista

}

function carregarNomes() {

	let intensLista = ''
	for (indice in nomes) {

		let nome = nomes[indice]

		intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`

		//alert(intensLista)
	}

	document.getElementById('lista').innerHTML = intensLista

}
let listaAmigos = [];
let quantidadeDeSorteios = 0;
let contadordeAmigos = 0;

function adicionarAmigo() {
    let campoTexto = document.getElementById("amigo").value;
    if (campoTexto.trim() != "") {
        listaAmigos.push(campoTexto.trim());
        console.log(listaAmigos);
    } else {
        console.log("O campo está vazio. Nenhum amigo foi adicionado. Digite um nome válido");
        alert("O campo está vazio. Nenhum amigo foi adicionado. Digite os nomes do sorteio.");
    }
    listaAmigoNaTela();
    contadordeAmigos++;
    return listaAmigos;
}

function listaAmigoNaTela() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista existente na tela

    if (listaAmigos.length > 0) {
        listaAmigos.forEach((amigo, index) => {
            let item = document.createElement("li"); // Cria um item da lista
            item.textContent = `${index + 1}. ${amigo}`; // Define o texto do item
            listaElement.appendChild(item); // Adiciona o item à lista na tela
        });
        document.getElementById("amigo").value = ""; // Limpa o campo de texto
        console.log(`Amigos adicionados: ${listaAmigos.join(", ")}`);
    } else {
        console.log("Nenhum amigo na lista.");
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        console.log("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    quantidadeDeSorteios++;
    console.log(`${quantidadeDeSorteios}`);
    console.log(`O amigo sorteado foi: ${amigoSorteado}`);
    limparLista();
    return amigoSorteado;
}

function limparLista() {
    if (quantidadeDeSorteios == contadordeAmigos) {
        listaAmigos = [];
        document.getElementById("listaAmigos").textContent = "";
        document.getElementById("resultado").textContent = "";
        quantidadeDeSorteios = 0; // Resetar o contador de sorteios
        console.log("A lista de amigos foi limpa após 4 sorteios.");
    }
}
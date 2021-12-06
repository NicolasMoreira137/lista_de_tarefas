var enter = document.getElementById("nova-tarefa");

enter.addEventListener('keyup', (e) => {

    if (e.key === "Enter") {
        adicionarT()
    }
})

function adicionarT() {
    var conteudo = document.getElementById("nova-tarefa");

    var areaTemplate = document.getElementById("template");

    var novoItem = areaTemplate.content.cloneNode(true);

    var li = novoItem.querySelector("li")

    li.append(conteudo.value)

    var lista = document.getElementById("lista");

    if (conteudo.value == "") {
        alert("Insira um texto");
    }
    else {
        var numeroDeItens = lista.children.length;
        if (numeroDeItens % 2 == 0) {
            li.style.backgroundColor = "#E4EFF1"

        }
        if (numeroDeItens % 3 == 0) {
            li.style.color = "red"
        }
        lista.append(novoItem);
        conteudo.value = ""
    }
}

function remover(elemento) {
    elemento.parentElement.remove();

}
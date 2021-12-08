window.onload = () => {
    listarTarefas();
}

var tarefas = [];

function adicionarTarefa() {
    var novaTarefa = document.getElementById("nova-tarefa");

    tarefas.push(novaTarefa.value);
    listarTarefas();

    novaTarefa.value = "";
}


function listarTarefas() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach(function (item, posicao) {
        var modeloItem = document.getElementById("modeloItem");
        var novoItem = modeloItem.content.cloneNode(true);
        var li = novoItem.querySelector('li');
        li.value = posicao;
        li.append(item);
        lista.append(novoItem);

    });
}


function remover(elemento) {
    var posicao = elemento.parentElement.value
    tarefas.splice(posicao, 1)
    listarTarefas();
}
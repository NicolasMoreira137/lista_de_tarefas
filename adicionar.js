function add() {
    var lista = document.getElementById("lista")
    var item = document.getElementById('item')
    var itens = item.content.cloneNode(true)

    lista.appendChild(itens)
}
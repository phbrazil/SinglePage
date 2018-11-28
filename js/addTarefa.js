function addTarefa() {
    this._STORAGE_NAME = 'todo';

    var status = "pendente";
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;

    let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));

    if (nome != '' && data != '') {
        document.getElementById("add").innerHTML = "Nova tarefa " + nome + " Adicionada!";
        addLista(status, nome, data, lista);
    } else {
        alert("Favor informar os dados");
    }

}


function addTarefa() {
    this._STORAGE_NAME = 'todo';

    var status = "pendente";
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;

    if (nome != '' && data != '') {
        document.getElementById("add").innerHTML = "Nova tarefa " + nome + " Adicionada!";
        addLista(status, nome, data);
    } else {
        alert("Favor informar os dados");
    }

}


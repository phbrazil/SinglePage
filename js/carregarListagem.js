function carregarListagem() {
    this._STORAGE_NAME = 'todo';

    let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));

    if (lista === null) {
        alert("Lista Vazia");
    } else {
        return lista
    }
}
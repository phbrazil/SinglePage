

function addLista(nome, data, lista) {
    this._STORAGE_NAME = 'todo';

    if (lista === null) {
        lista = [];
        //alert("Lista vazia");

    } else {

        lista.push(nome);
        lista.push(data);
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
        return lista;
    }


}


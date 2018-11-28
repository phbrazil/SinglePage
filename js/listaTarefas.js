

function addLista(status, nome, data, lista) {
    this._STORAGE_NAME = 'todo';

    if (lista === null) {
        lista = [];
        //alert("Lista vazia");

    } else {
        lista.push({"status":status});
        lista.push({"nome":nome});
        lista.push({"data":data});
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
        return lista;
    }


}


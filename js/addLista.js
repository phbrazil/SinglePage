

function addLista(status, nome, data) {

    this._STORAGE_NAME = 'todo';
    let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));

    if (lista === null) {
        lista = [];
        lista.push({"status": status}, {"nome": nome}, {"data": data});
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
        return lista;

    } else {
        lista.push({"status": status}, {"nome": nome}, {"data": data});
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
        return lista;
    }


}


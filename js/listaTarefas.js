

function addLista(status, nome, data) {

    this._STORAGE_NAME = 'todo';
    let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));

    if (lista === null) {
        lista = [];
        lista.push({"status": status});
        lista.push({"nome": nome});
        lista.push({"data": data});
              localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
  console.log(lista.length);
        return lista;

    } else {
        lista.push({"status": status});
        lista.push({"nome": nome});
        lista.push({"data": data});
        console.log(lista[0].nome);
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
        return lista;
    }


}


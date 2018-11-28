function removerTudo() {
    this._STORAGE_NAME = 'todo';
    let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));

    var answer = confirm("Quer realmente apagar tudo?");
    if (answer === true) {

        lista = null;

        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
        location = 'index.html';


    } else {
        return false;
    }



}
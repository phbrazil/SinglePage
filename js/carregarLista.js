class carregarLista {
    constructor() {
        this._STORAGE_NAME = 'todo';
    }

    carregarListaGeral() {
        let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));
        if (lista === null) {
            lista = [];
            alert("Nenhum item na lista");
        }
        return lista;
    }

    inserirTarefa(nome, prazo) {
        // carregar lista[] com TODAS as tarefas
        let lista = this.carregarListaGeral();

        //inserir na lista
        lista.push(nome);
        lista.push(prazo);

        //inserir no storage
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
    }
}
window.onload = function () {

    var lista = carregarListagem();

    var tamanho = lista.length / 3;

    console.log(tamanho);

    if (lista != null) {

        for (var j = 0; j < tamanho; j++) {
            var table = document.getElementById("myTable");

            var row = table.insertRow(j);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = lista[j].status;
            cell2.innerHTML = lista[j + 1].nome;
            cell3.innerHTML = lista[j + 2].data;

            console.log(j);
            console.log(lista[7].nome);

        }

    }

}
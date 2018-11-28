window.onload = function () {
    var lista = carregarListagem();


    if (lista != null) {

        for (var j = 0; j < lista.length; j++) {
            var table = document.getElementById("myTable");
            var row = table.insertRow(j);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = lista[j];
            cell2.innerHTML = lista[j].nome;
            cell3.innerHTML = lista[j].data;

            console.log(JSON.stringify(lista[0]));


        }

    }

}
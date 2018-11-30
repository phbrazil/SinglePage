window.onload = function () {

    var lista = carregarListagem();

    var tamanho = lista.length / 3;
    
    var status= 0;
    var nome = 1;
    var data = 2;

    if (lista !== null) {


        for (var j = 0; j < tamanho; j++) {
            var table = document.getElementById("myTable");

            var row = table.insertRow(j);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = lista[status+j].status;

            cell2.innerHTML = lista[nome+j].nome;

            cell3.innerHTML = lista[data+j].data;
            console.log(j);
            
            status++;
            status++;
            nome++;
            nome++;
            data++;
            data++;
        }
    }



};

let table = document.getElementById('table');

function deleteRow(row){
    row.remove();
}
function addRow(){
    let date = document.getElementsByClassName('dateInput')[0].value;
    let amount = document.getElementsByClassName('amountInput')[0].value;
    let transaction = document.getElementsByClassName('transactionInput')[0].value;

    let row = document.createElement('tr');

    let amountCell = document.createElement('td');
    amountCell.innerText = amount;
    row.appendChild(amountCell);

    let transactionCell = document.createElement('td');
    transactionCell.innerText = transaction;
    row.appendChild(transactionCell)

    let dateCell = document.createElement('td');
    dateCell.innerText = date;
    row.appendChild(dateCell);

    table.appendChild(row);


    let binCell = document.createElement('td');


    let deleteCell = document.createElement('button');
    let binImage = document.createElement('img');
    binImage.style.width = '35px';
    binImage.style.height = '35px';
    binImage.src = './Images/trash.png';
    deleteCell.appendChild(binImage);
    binCell.appendChild(deleteCell);
    deleteCell.classList.add('delete-button');
    deleteCell.onclick=()=> deleteRow(row);
    row.appendChild(binCell);
}

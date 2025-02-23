

function deleteRow(row){
    row.remove();
}
function addRow(){
    let date = document.getElementsByClassName('dateInput')[0].value;
    let amount = document.getElementsByClassName('amountInput')[0].value;
    let transaction = document.getElementsByClassName('transactionInput')[0].value;

    // Check if any input is empty
    if(date.trim() === "" || amount.trim() === "" || transaction.trim() === ""){
        alert("Please fill in all fields before adding.");
        return; // Stop executing the rest of the function
    }

    // Proceed with adding the row if all fields are filled
    let row = document.createElement('tr');

    let amountCell = document.createElement('td');
    amountCell.innerText = amount;
    row.appendChild(amountCell);

    let transactionCell = document.createElement('td');
    transactionCell.innerText = transaction;
    row.appendChild(transactionCell);

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
    deleteCell.onclick = () => deleteRow(row);
    row.appendChild(binCell);

    let totalIncome = document.getElementById('totalincome').innerText;
    let totalExpense = document.getElementById('totalexpense').innerText;
    let totalBalance = document.getElementById('balance').innerText;

    if(transaction == 'Income'){
        if(totalIncome == '0'){
            document.getElementById('totalincome').innerText = amount;
        } else {
            document.getElementById('totalincome').innerText = parseInt(totalIncome) + parseInt(amount);
        }
        if(totalBalance == '0'){
            document.getElementById('balance').innerText = amount;
        } else {
            document.getElementById('balance').innerText = parseInt(totalBalance) + parseInt(amount);
        }
    } else if(transaction == 'Expense'){
        if(totalExpense == '0'){
            document.getElementById('totalexpense').innerText = amount;
        } else {
            document.getElementById('totalexpense').innerText = parseInt(totalExpense) + parseInt(amount);
        }
        if(totalBalance == '0'){
            document.getElementById('balance').innerText = -parseInt(amount);
        } else {
            document.getElementById('balance').innerText = parseInt(totalBalance) - parseInt(amount);
        }
    }
}

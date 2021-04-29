var transactions = [];
var balance = 0;
const addTransaction = () => {
    var income = 0;
    var expense = 0;
    var amount = document.getElementById("amount").value;
    var text=document.getElementById("text").value;
    amount = parseInt(amount);
    if(text=="" || isNaN(amount)==true){
        alert("Enter the information needed please");
        return;
    }
    if (amount < 0 && (-1) * amount > balance) {
        alert("Transaction Failed.");
        return;
    }
    else {
        transactions.push(amount);
        AddHistory(amount,text);
        transactions.forEach(element => {
            if (element >= 0) {
                income += element;
            }
            else {
                expense += (-1) * element;
            }
        })
    }
    balance = income - expense;
    document.getElementById("incomeValue").innerHTML = income;
    document.getElementById("expenceValue").innerText = expense;
    document.getElementById("balanceValue").innerHTML = balance;
    console.log(transactions);
}

const AddHistory = (amount,text) => {
    var tag = document.createElement('p');
    var textInserted = document.createTextNode(text + " " + amount );
    tag.appendChild(textInserted);
    var history = document.getElementById("oldTransactions");
    history.appendChild(tag);
    
}
/* first method: using array*/

/*var transactions = [];
var balance = 0;

const addTransaction = () => { 

    var income = 0; 
    var expense = 0;
    var amount = document.getElementById("amount").value;
    var text = document.getElementById("text").value;

    amount = parseInt(amount);

    if (isEmpty(text) || checkIsNan(amount)) {
        alert("Enter the information needed please");
        return;
    }

    if (amount < 0 && checkIfAmountGreaterThanBalance(amount,balance)) {
        alert("Transaction Failed.");
        return;
    }

    transactions.push(amount);

    AddHistory(amount, text);

    transactions.forEach(element => {
        if (element >= 0) {
            income += element;
            return;
        }
        expense += (-1) * element;    
    })

    balance = income - expense;

    document.getElementById("incomeValue").innerHTML = income;
    document.getElementById("expenceValue").innerText = expense;
    document.getElementById("balanceValue").innerHTML = balance;

}

const AddHistory = (amount, text) => {

    var history = document.getElementById("oldTransactions");

    var tag = document.createElement('p');
    var textInserted = document.createTextNode(text + " " + amount);
    tag.appendChild(textInserted);
    history.appendChild(tag);

    var img=document.createElement('img');
    img.src="file:///C:/Users/USER/Downloads/window-close-regular.svg";
    history.appendChild(img);

    var newLine=document.createElement('br');
    history.appendChild(newLine);


}

const checkIsNan = (number) => {

    if(isNaN(number) == true){
        return true;
    }

}

const checkIfAmountGreaterThanBalance = (amount,balance) => {

    if((-1) * amount > balance){
        return true;
    }

}

const isEmpty = (text) => {

    if(text == ""){
        return true;
    }

}*/

/*secong method: using object*/

class transaction {

    constructor(text, amount) {
        this.text = text;
        this.amount = amount;
    }

    getText() {
        return this.text;
    }

    getAmount() {
        return this.amount;
    }

}

var transactions = [];
var balance = 0;

const addTransaction = () => {

    var income = 0;
    var expense = 0;
    var amount = document.getElementById("amount").value;
    var text = document.getElementById("text").value;

    amount = parseInt(amount);

    if (isEmpty(text) || checkIsNan(amount)) {
        alert("Enter the information needed please");
        return;
    }

    if (amount < 0 && checkIfAmountGreaterThanBalance(amount, balance)) {
        alert("Transaction Failed.");
        return;
    }

    transactions.push(new transaction(text, amount));

    addHistory(transactions[transactions.length-1]);

    transactions.forEach(element => {
        if (element.getAmount() >= 0) {
            income += element.getAmount();
            return;
        }
        expense += (-1) * element.getAmount();
    })

    balance = income - expense;

    document.getElementById("incomeValue").innerHTML = income;
    document.getElementById("expenceValue").innerText = expense;
    document.getElementById("balanceValue").innerHTML = balance;

}


const addHistory = (transaction) => {

        var history = document.getElementById("oldTransactions");

        var tag = document.createElement('p');
        var textInserted = document.createTextNode(transaction.getText() + " " + transaction.getAmount());
        tag.appendChild(textInserted);

        history.appendChild(tag);

}

const checkIsNan = (number) => {

    if (isNaN(number) == true) {
        return true;
    }

}

const checkIfAmountGreaterThanBalance = (amount, balance) => {

    if ((-1) * amount > balance) {
        return true;
    }

}

const isEmpty = (text) => {

    if (text == "") {
        return true;
    }

}



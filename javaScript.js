let balance = Number(localStorage.getItem("balance")) || 500000;
let pin = localStorage.getItem("pin") || "1234";

function updateBalance() {
    localStorage.setItem("balance", balance);
}

function deposit() {
    let amount = Number(document.getElementById("amount").value);

    if(amount > 0){
        balance += amount;
        updateBalance();
        alert("Deposit Successful");
    }else{
        alert("Enter valid amount");
    }
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);

    if(amount <= balance){
        balance -= amount;
        updateBalance();
        alert("Withdrawal Successful");
    }else{
        alert("Insufficient Balance");
    }
}

function transfer() {
    let amount = Number(document.getElementById("amount").value);

    if(amount <= balance){
        balance -= amount;
        updateBalance();
        alert("Transfer Successful");
    }else{
        alert("Insufficient Balance");
    }
}

function showBalance() {
    document.getElementById("balance").innerHTML =
    "TZS " + balance.toLocaleString();
}

function changePin() {

    let oldPin = document.getElementById("oldPin").value;
    let newPin = document.getElementById("newPin").value;

    if(oldPin === pin){
        localStorage.setItem("pin", newPin);
        alert("PIN Changed Successfully");
    }else{
        alert("Wrong Old PIN");
    }
}

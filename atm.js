let correctPin="1234"
let balance=5000
let historyList=[]

/* CARD NUMBER GENERATOR */

function generateCard(){

let number=""

for(let i=0;i<4;i++){

number+=Math.floor(1000+Math.random()*9000)+" "

}

document.getElementById("cardNumber").innerText=number

}

generateCard()

/* CARD FLIP */

function flipCard(){

document.getElementById("card").classList.toggle("flip")

}

/* LOGIN */

function login(){

let pin=document.getElementById("pin").value

if(pin===correctPin){

document.getElementById("loginBox").style.display="none"
document.getElementById("atmBox").style.display="block"

}else{

document.getElementById("loginMsg").innerText="Wrong PIN"

}

}

/* BALANCE */

function updateBalance(){

document.getElementById("balance").innerText=balance

}

/* HISTORY */

function addHistory(text){

historyList.unshift(text)

let list=""

historyList.forEach(function(item){

list+="<li>"+item+"</li>"

})

document.getElementById("history").innerHTML=list

}

/* DEPOSIT */

function deposit(){

let amt=Number(document.getElementById("amount").value)

if(amt<=0)return

balance+=amt

updateBalance()

addHistory("Deposited ₹"+amt)

}

/* WITHDRAW */

function withdraw(){

let amt=Number(document.getElementById("amount").value)

if(amt>balance){

addHistory("Failed withdrawal ₹"+amt)

}else{

balance-=amt

updateBalance()

addHistory("Withdrawn ₹"+amt)

}

}

/* RECEIPT DOWNLOAD */

function downloadReceipt(){

let receipt="---- MINI BANK RECEIPT ----\n\n"

receipt+="Balance: ₹"+balance+"\n\n"

receipt+="Transactions:\n"

historyList.forEach(function(item){

receipt+="- "+item+"\n"

})

let blob=new Blob([receipt],{type:"text/plain"})

let link=document.createElement("a")

link.href=URL.createObjectURL(blob)

link.download="ATM_receipt.txt"

link.click()

}
function logout(){

document.getElementById("atmBox").style.display="none";

document.getElementById("loginBox").style.display="block";

document.getElementById("pin").value="";

}
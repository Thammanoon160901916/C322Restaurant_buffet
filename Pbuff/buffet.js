function DATA(){
    document.getElementById("data").addEventListener("click",function(){
        document.querySelector(".popup1").style.display = "flex";
    })
}
function close1(){
    document.getElementById("close1").addEventListener("click",function(){
        document.querySelector(".popup1").style.display = "none";
    }) 
}
function cashier(){
    document.getElementById("cashier").addEventListener("click",function(){
        document.querySelector(".popup").style.display = "flex";
    }) 
}
function close(){
    
    document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".popup").style.display ="none";
        document.querySelector(".popup1").style.display = "none";
    }) 
    
}
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
})

function changeClass1(){
    
    document.getElementById('button1').className = 'formatForButton';
    updateCount1();

}
function changeClass2(){
    
    document.getElementById('button2').className = 'formatForButton';
    updateCount1();

}
function changeClass3(){
    document.getElementById('button3').className = 'formatForButton';
    updateCount1();
}
function changeClass4(){
    document.getElementById('button4').className = 'formatForButton';
    updateCount1();

}
function changeClass5(){
    document.getElementById('button5').className = 'formatForButton';
    updateCount1();
}
function changeClass6(){
    document.getElementById('button6').className = 'formatForButton';
    updateCount1();

}
function changeClass7(){
    document.getElementById('button7').className = 'formatForButton';
    updateCount1();

}
function changeClass8(){
    document.getElementById('button8').className = 'formatForButton';
    updateCount1();

}
function changeClass9(){
    document.getElementById('button9').className = 'formatForButton';
    updateCount1();

}
function changeClass10(){
    document.getElementById('button10').className = 'formatForButton';
    updateCount1();

}
function changeClass11(){
    document.getElementById('button11').className = 'formatForButton';
    updateCount1();

}
function changeClass12(){
    document.getElementById('button12').className = 'formatForButton';
    updateCount1();

}
function changeClass13(){
    document.getElementById('button13').className = 'formatForButton';
    updateCount1();

}
function changeClass14(){
    document.getElementById('button14').className = 'formatForButton';
    updateCount1();


}
function changeClass15(){

    document.getElementById('button15').className = 'formatForButton';
    updateCount1();

}
function changeClass16(){
    updateCount1();
    document.getElementById('button16').className = 'formatForButton';

}
function return1(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button1').className = 'button';

}
function return2(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button2').className = 'button';
}
function return3(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button3').className = 'button';
}
function return4(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button4').className = 'button';
}
function return5(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button5').className = 'button';
}
function return6(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button6').className = 'button';
}
function return7(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button7').className = 'button';
}
function return8(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button8').className = 'button';
}
function return9(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button9').className = 'button';
}
function return10(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button10').className = 'button';
}
function return11(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button11').className = 'button';
}
function return12(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button12').className = 'button';
}
function return13(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button13').className = 'button';
}
function return14(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button14').className = 'button';
}
function return15(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button15').className = 'button';
}
function return16(){
    checkEmptyInput();
    updateCount2();
    document.getElementById('button16').className = 'button';
}

function calculate(){
    var amount = document.getElementById('amount').value;
    var count = document.getElementById('count').value;
    var Received =document.getElementById('Received').value;
    var a =(amount * count);
    
    var a2 =(( a + (a * 0.1)) ) ;
    var a3 = Received - a2 ;
    const round = (value,digits)=>{
        const factor =Math.pow(10,digits);
        value += Math.sign(value) * Number.EPSILON;
        return Math.round(value *factor)/factor;
    }
    if(Received<a2){
        alert("Insufficient payment amount");
        return
    }else{
        addHtmlTableRow();
    }
    document.getElementById('resulted').innerHTML = " Received : " + Received +" ฿ Change : " + round(a3,2) +" ฿";
    
}
function cal(){
    var amount = document.getElementById('amount').value;
    var count = document.getElementById('count').value;
    var a =(amount * count);
    var a2 =(( a + (a * 0.1)) ) ;
    document.getElementById('result1').innerHTML = "Subtotal : " + a2 +" ฿ ";
    
}
let nEntry = 16;
let nReserve = 0;
const countup = document.getElementById("entry");
const countdown= document.getElementById("reserve");
countup.innerHTML = `${nEntry}`;
countdown.innerHTML = `${nReserve}`;
function updateCount2(){
    
    countup.innerHTML++;
    countdown.innerHTML--;

}
function updateCount1(){
    countup.innerHTML--;
    countdown.innerHTML++;

}
var rIndex,
table = document.getElementById("table");

function checkEmptyInput()
{
var isEmpty = false,
    count = document.getElementById("count").value,
    amount = document.getElementById("amount").value,
    total = document.getElementById("result1").value;
    Received = document.getElementById("Received").value,
    change = document.getElementById("result1").value;

if(count === ""){
    alert("count Connot Be Empty");
    isEmpty = true;
    updateCount1();
}
else if(amount === ""){
    alert("amount Connot Be Empty");
    isEmpty = true;
    updateCount1();
}
else if(total === ""){
    alert("total Connot Be Empty");
    isEmpty = true;
    updateCount1();
}
else if(Received === ""){
    alert("Received Connot Be Empty");
    isEmpty = true;
    updateCount1();
}
else if(change === ""){
    alert("change Connot Be Empty");
    isEmpty = true;
    updateCount1();
}
return isEmpty;

}
function addHtmlTableRow()
{

if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    count = document.getElementById("count").value,
    amount = document.getElementById("amount").value,
    total = document.getElementById("result1").value;
    Received = document.getElementById("Received").value,
    change = document.getElementById("result1").value;

const round = (value,digits)=>{
    const factor =Math.pow(10,digits);
    value += Math.sign(value) * Number.EPSILON;
    return Math.round(value *factor)/factor;
}
var total1 = (count * amount);
total = total1+(total1*0.1);
change = Received - total;
cell1.innerText = count;
cell2.innerText = amount;
cell3.innerText = total;
cell4.innerText = Received;
cell5.innerText = round(change,2);
selectedRowToInput();
}
}

function selectedRowToInput()
{
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      rIndex = this.rowIndex;
      document.getElementById("count").value = this.cells[0].innerText;
      document.getElementById("amount").value = this.cells[1].innerText;
      document.getElementById("result1").value = this.cells[2].innerText;
      document.getElementById("Received").value = this.cells[3].innerText;
      document.getElementById("result1").value = this.cells[4].innerText;
    };
}
}
selectedRowToInput();

function htmlToCSV(html, filename) {
	var data = [];
	var rows = document.querySelectorAll("table tr");
			
	for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
				
		for (var j = 0; j < cols.length; j++) {
		        row.push(cols[j].innerText);
        }
		        
		data.push(row.join(",")); 		
	}

	downloadCSVFile(data.join("\n"), filename);
}
function downloadCSVFile(csv, filename) {
	var csv_file, download_link;

	csv_file = new Blob([csv], {type: "text/csv"});

	download_link = document.createElement("a");

	download_link.download = filename;

	download_link.href = window.URL.createObjectURL(csv_file);

	download_link.style.display = "none";

	document.body.appendChild(download_link);

	download_link.click();
}
document.getElementById("download-button").addEventListener("click", function () {
	var html = document.querySelector("table").outerHTML;
	htmlToCSV(html, "Buffet(ep).csv");
})

var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}


function logout() {
  localStorage.removeItem("jwt");
  window.location.href = './login.html'
}
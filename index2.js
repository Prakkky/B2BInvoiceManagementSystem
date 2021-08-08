
const add =() => {
	
const name = document.getElementById("Name_id").value;
const cust = document.getElementById("cust_id").value;
const invo = document.getElementById("invo_id").value; 
const invo_amt = document.getElementById("invo_Amt_id").value;
const due = document.getElementById("due_date_id").value;
const note = document.getElementById("notes_id").value;

const tableRef= document.getElementById("datatable");

tableRef.innerHTML +=`<tr><td>${name}</td><td>${cust}</td><td>${invo}</td><td>${invo_amt}</td><td>${note}</td></tr>`;
}
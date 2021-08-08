const searchFun = () => {
            let filter = document.getElementById('search').value.toUpperCase();
            let myTable = document.getElementById('datatable');
            let tr = myTable.getElementsByTagName('tr');
            for (var i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName('td')[2];
                if (td) {
                    let textValue = td.textContent || td.innerHTML;
                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }
                    else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }





const showHeader=()=>{
	
	const tableRef=document.getElementById("datatable");
	let tableHeader="<tr>";
	header.forEach(element=>{
		tableHeader += "<th>"+ element + "</th>";
	});
	tableHeader += "</tr>";
	tableRef.innerHTML += tableHeader;
}

const showonLoad=()=>{
	showHeader();
	const tableRef=document.getElementById("datatable");
	data.forEach(tableRow =>{
		let tableEle="<tr>";
		Object.entries(tableRow).forEach(tableRowEle=>{
			const[key,value]=tableRowEle;
			tableEle += "<td>"+value+"</td>";
			
		});
		tableEle +="</tr>";
		tableRef.innerHTML+=tableEle;
	});
	
}

// fetch from server

 fetch("http://localhost:5407/H2HRadius/fetch").then(
     res=>{
       res.json().then(
         data=>{
           console.log(data);
           if(data.length > 0) {
             var temp = "";
             data.forEach((demo) => {
               temp += "<tr>";
               temp +='<td> <input type="checkbox"/></td>'
               temp += "<td>"+demo.Customer_name+"</td>";
               temp += "<td>"+demo.Customer_id+"</td>";
               temp += "<td>"+demo.invoice_id+"<td>"; 
               temp += "<td>"+demo.invoice_amount+"<td>";
               temp += "<td>"+demo.due_date+"<td>"; 
               temp += "<td>"+demo.predicted_date+"<td>";
                           // temp += "<td>"+demo.notes+"<td>";
             });
             document.getElementById("text").innerHTML=temp;
           }
         }
       )
     }
   )
    


// checkbox functionality
function checkingall(that){
        let check_arr=document.querySelectorAll('input[type="checkbox"]')
      if(that.checked){
           for(let i=0;i<9256;i++){
             check_arr[i].checked=true;
           }
      }else{
       for(let i=0;i<9256;i++){
             check_arr[i].checked=false;
           }
      }
}
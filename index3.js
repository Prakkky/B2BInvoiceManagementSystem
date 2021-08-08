var modal = document.getElementById("myModal");


var addbtn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


addbtn.onclick = function()
{
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Edit

var modal1 = document.getElementById("myModal1");


var editbtn = document.getElementById("myBtn1");


var span = document.getElementsByClassName("close1")[0];


editbtn.onclick = function()
{
  modal1.style.display = "block";
}


span.onclick = function() {
  modal1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


//  delete
var modal2 = document.getElementById("myModal2");


var delbtn = document.getElementById("myBtn2");


var span = document.getElementsByClassName("close2")[0];


delbtn.onclick = function()
{
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
var count = 0;
function add(){
  var n = document.getElementById("newItem").value;
  if(n!="")
    {
  var itm = document.getElementsByClassName("row")[count];
  var cln = itm.cloneNode(true);
  document.getElementById("todo").appendChild(cln);    
  document.getElementsByClassName("item")[count].innerHTML = n;
  document.getElementsByClassName("delete")[count].style.display="initial";
  count++;}
else{
  window.alert("Nothing to add in the list!");
}
}



var input = document.getElementById("newItem");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); document.getElementById("add").click();
  }
}); 
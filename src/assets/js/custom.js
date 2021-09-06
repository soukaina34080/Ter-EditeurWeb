var myExtObject = (function() {
  return {
    download :function (){
  var text = document.getElementById("my-textarea").value;
  var blob = new Blob([text], { type: "text/plain"});
  var anchor = document.createElement("a");
  anchor.download = document.getElementById("nouria").value;
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target ="_blank";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  }
}})(myExtObject||{})



var ainas=(function(){
return{

getFileInfo :function (){
  var name = document.getElementById('myFile').files[0].name;
  var size = document.getElementById('myFile').files[0].size;
  var type = document.getElementById('myFile').files[0].type;
  var date = document.getElementById('myFile').files[0].lastModifiedDate;

  var info = name+" "+size+" "+type+" "+date;
  alert(info);
}}})(ainas||{})

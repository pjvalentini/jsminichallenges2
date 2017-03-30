
document.onkeypress=function(e){
 var e=window.event || e
 // alert("CharCode value: "+e.charCode);
 alert("You pressed!: "+String.fromCharCode(e.charCode))
}

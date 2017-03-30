
document.keypress=function(e){
 var e=window.event || e
 document.write("You pressed!: "+String.fromCharCode(e.charCode))
}

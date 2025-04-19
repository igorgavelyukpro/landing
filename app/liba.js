// getElementById function

console.log("lova pass");
function $i(e){
  return document.getElementById(e)
}
// getElementsByClassName function
function $c(e){
  return document.getElementsByClassName(e)
}
// addEventListener function
function $el(e,disallowNonNumericInput){
  return e.addEventListener("keydown", disallowNonNumericInput);
}
function $bl(e,formatTel){
  return e.addEventListener("keyup", formatTel);
}
// Color function
function q() {
  return "lightblue";
}

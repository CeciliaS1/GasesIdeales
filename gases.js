
const R = 0.082;
function farenheit() {
  var gradosc = document.getElementById("gradosc").value;
    resultado = parseInt((gradosc)*9/5)+32;
  document.getElementById("resultado").innerHTML = resultado;
}
function pideal() { 
    var t = parseInt(document.getElementById("t").value);
    var n = parseInt(document.getElementById("n").value);
    var v = parseInt(document.getElementById("v").value);
    var valorp = parseInt((R*n*t)/v);
    document.getElementById("valorp").innerHTML = valorp;
} 
function videal() {
 
    var t = parseInt(document.getElementById("t").value);
    var n = parseInt(document.getElementById("n").value);
    var p = parseInt(document.getElementById("p").value);
    var valorv = parseInt((n*R*t)/p);
    document.getElementById("valorv").innerHTML = valorv;
    }     
function nideal() {

    var t= parseInt(document.getElementById("t").value);
    var p= parseInt(document.getElementById("p").value);
    var v= parseInt(document.getElementById("v").value);
    var valorn = parseInt ((p*v)/R*t);
    document.getElementById("valorn").innerHTML =valorn;
}
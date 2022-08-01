function modulo1() {
    location.href ="../Modulo1/modulo1.html";
}

function modulo2() {
    location.href ="../Modulo2/modulo2.html";
}
document.getElementById('userr').innerHTML = "ksalñdk";

function getUser(){

	document.getElementById('userr').innerHTML = "Bienvenido " + window.localStorage.getItem("user");

}
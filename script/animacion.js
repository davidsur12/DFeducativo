
var user="ji";
function getName() {
	document.getElementById("text2").value = document.getElementById("text1").value;
}


function validarUser() {

	user = document.querySelector("div #name").value;
	window.localStorage.setItem("user" , user);
	if(user.length > 0){
		//si los caracteres ingresados por el usuario son mallores a 0 la validacion es valida
		//window.location.href = "selectModulo.html";
		location.href ="";

	}else{
		//alert("por favor ingresa tu nombre");
		//swal("Oops!", "Porfavor ingresa tu nombre", "alert");
		Swal.fire({
		
			icon: 'info',
			title: 'Ingresa tu nombre',
			showConfirmButton: false,
			timer: 1500
		  })
	}

}

function getUser(){
//recupero el valor del usuario
	document.getElementById('user').innerHTML = "Bienbenido " + window.localStorage.getItem("user");

}




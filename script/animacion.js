function getName() {
	document.getElementById("text2").value = document.getElementById("text1").value;
}


function validarUser() {

	var user = document.querySelector("div #name").value;
	if(user.length > 0){
		//si los caracteres ingresados por el usuario son mallores a 0 la validacion es valida
		//window.location.href = "selectModulo.html";
		location.href ="selectModulo.html";

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





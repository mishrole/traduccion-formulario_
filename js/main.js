	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];
	var tituloMostrar = document.getElementById("titulo-mostrar");
	var datosMostrar = document.getElementById("datos-mostrar");

function translate(){

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Elecrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recorda datos";
	button.innerHTML = "Iniciar Sesión";
}

translate();

function datos(){

	tituloMostrar.innerHTML = "Datos de Formulario"
	datosMostrar.innerHTML = "El correo electrónico mostrado es: <br>" + email.value + "<br>" + "La clave ingresada es: <br>" + password.value 

}
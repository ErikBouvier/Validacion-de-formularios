const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault(); //esto evita que el formulario se envie
    }else{
        event.preventDefault();

        alert(
            'Los datos enviados son: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de Estudios: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction); //esto escucha el evento submit del formulario y ejecuta la función submitFunction

function validarFormulario() {
    
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;
    
    // aca se validan los campos de texto
    camposTexto.forEach((campo) => {
        let errorCampo = document.getElementById(`error` + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); //esto es para que el id del error sea igual al id del campo pero con la primer letra en mayúscula
        if (campo.value.length == '') {
            mostrarError(errorCampo, 'Este campo es obligatorio');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres');
            validacionCorrecta = false;
            
        } else {
            ocultarError(errorCampo);
        }
    })
    
    // aca se valida el email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ // esto valida que el email tenga un formato correcto
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail, 'El email ingresado no es válido');
        validacionCorrecta = false;
    }

    const telefono = document.getElementById('telefono');
    let errorTelefono = document.getElementById('errorTelefono');

    if(telefono.value.length == 0){
        mostrarError(errorTelefono, 'Este campo es obligatorio');
        validacionCorrecta = false;
    }else if(telefono.value.length < 8){
        mostrarError(errorTelefono, 'El teléfono debe tener al menos 8 dígitos');
        validacionCorrecta = false;
    }else{
        ocultarError(errorTelefono);
    }

    // aca se valida la edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if(edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 años para poder registrarte');
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad);
    }

    // aca se valida la actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    if(actividad.value == ''){
        mostrarError(errorActividad, 'Debes seleccionar una actividad');
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad);
    }

    // aca se valida el nivel de estudios
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');
    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Debes seleccionar un nivel de estudios');
        validacionCorrecta = false;
    }else{
        ocultarError(errorNivelEstudio);
    }

    // aca se validan terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones');
        validacionCorrecta = false;
    }else{
        ocultarError(errorAceptoTerminos);
    }
    return validacionCorrecta; // esto nos dira si la validacion fue correcta o no
}


const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'none';
}

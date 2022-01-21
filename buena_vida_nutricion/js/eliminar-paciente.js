var pacienes = document.querySelectorAll(".paciente");

// Elimina todos los pacientes - originales y nuevos
var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
    
});

/*
Elimina los pacientes originales de la tabla
pacienes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
});
*/
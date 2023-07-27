function iniciarSimulacion () {
    
    // Obtener los valores de las fechas y horas de inicio y fin de la simulación desde los elementos del formulario
    var momentoInicio = {
        fechaInicio: document.getElementById('fechaInicio').value,
        inicioHora: document.getElementById('inicioHora').value,
        inicioMins: document.getElementById('inicioMins').value,
    }

    var momentoFin = {
        fechaFin: document.getElementById('fechaFin').value,
        finHora: document.getElementById('finHora').value,
        finMins: document.getElementById('finMins').value,
    }

    // Validar si la hora de inicio es válida (entre 0 y 23) y los minutos son válidos (entre 0 y 59)
    if (momentoInicio.inicioHora > 23 || momentoInicio.inicioMins > 59) {
        // Mostrar una alerta si la hora de inicio no es válida
        alert('Ingrese una hora de inicio valida');
        return; // Salir de la función en caso de hora de inicio inválida
    } else {
        // Crear un objeto de tipo Date para el momento de inicio de la simulación
        var inicioSimulacion = new Date(momentoInicio.fechaInicio);
        // Establecer la hora y minutos del momento de inicio de la simulación
        inicioSimulacion.setHours = momentoInicio.inicioHora; 
        inicioSimulacion.setMinutes = momentoInicio.inicioMins;
        console.log(inicioSimulacion); // Imprimir el objeto Date con la hora de inicio
    }

    // Validar si la hora de fin es válida (entre 0 y 23) y los minutos son válidos (entre 0 y 59)
    if (momentoFin.finHora > 23 || momentoFin.finMins > 59) {
        alert('Ingrese una hora de fin valida');
        return;
    } else {
        // Crear un objeto de tipo Date para el momento de fin de la simulación
        var finSimulacion = new Date(momentoFin.fechaFin);
        finSimulacion.setHours = momentoFin.finHora;
        finSimulacion.setMinutes = momentoFin.finMins;
        console.log(finSimulacion);
    }

}
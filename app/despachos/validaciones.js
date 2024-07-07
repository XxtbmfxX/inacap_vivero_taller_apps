export const validarNumeroGuia = (numeroGuia) => {
  if (!numeroGuia || numeroGuia.trim().length === 0) {
    return 'El número de guía es obligatorio.';
  }
  if (isNaN(numeroGuia)) {
    return 'El número de guía debe ser un número válido.';
  }
  return '';
};

export const validarNombrePredio = (nombrePredio) => {
  if (!nombrePredio || nombrePredio.trim().length === 0) {
    return 'El nombre del predio es obligatorio.';
  }
  if (nombrePredio.length < 3) {
    return 'El nombre del predio debe tener al menos 3 caracteres.';
  }
  return '';
};

export const validarFecha = (fecha) => {
  if (!fecha || fecha.trim().length === 0) {
    return 'La fecha es obligatoria.';
  }
  return '';
};

export const validarCantidadPlantas = (cantidadPlantas) => {
  if (!cantidadPlantas || cantidadPlantas.trim().length === 0) {
    return 'La cantidad de plantas es obligatoria.';
  }
  if (isNaN(cantidadPlantas)) {
    return 'La cantidad de plantas debe ser un número válido.';
  }
  return '';
};

export const validarEspecies = (especies) => {
  if (!especies || especies.trim().length === 0) {
    return 'Las especies son obligatorias.';
  }
  return '';
};

export const validarNumeroSemanas = (numeroSemanas) => {
  if (!numeroSemanas || numeroSemanas.trim().length === 0) {
    return 'El número de semanas es obligatorio.';
  }
  if (isNaN(numeroSemanas)) {
    return 'El número de semanas debe ser un número válido.';
  }
  return '';
};

export const validarObservacion = (observacion) => {
  if (observacion.length > 500) {
    return 'La observación no debe tener más de 500 caracteres.';
  }
  return '';
};

export const validarFormularioDespacho = (numeroGuia, nombrePredio, fechaSolicitud, fechaRetiro, cantidadPlantas, especies, numeroSemanas, observacion) => {
  const errores = {};

  const errorNumeroGuia = validarNumeroGuia(numeroGuia);
  if (errorNumeroGuia) {
    errores.numeroGuia = errorNumeroGuia;
  }

  const errorNombrePredio = validarNombrePredio(nombrePredio);
  if (errorNombrePredio) {
    errores.nombrePredio = errorNombrePredio;
  }

  const errorFechaSolicitud = validarFecha(fechaSolicitud);
  if (errorFechaSolicitud) {
    errores.fechaSolicitud = errorFechaSolicitud;
  }

  const errorFechaRetiro = validarFecha(fechaRetiro);
  if (errorFechaRetiro) {
    errores.fechaRetiro = errorFechaRetiro;
  }

  const errorCantidadPlantas = validarCantidadPlantas(cantidadPlantas);
  if (errorCantidadPlantas) {
    errores.cantidadPlantas = errorCantidadPlantas;
  }

  const errorEspecies = validarEspecies(especies);
  if (errorEspecies) {
    errores.especies = errorEspecies;
  }

  const errorNumeroSemanas = validarNumeroSemanas(numeroSemanas);
  if (errorNumeroSemanas) {
    errores.numeroSemanas = errorNumeroSemanas;
  }

  const errorObservacion = validarObservacion(observacion);
  if (errorObservacion) {
    errores.observacion = errorObservacion;
  }

  return errores;
};

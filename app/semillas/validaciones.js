export const validarCodigoBolsa = (codigoBolsa) => {
  if (!codigoBolsa || codigoBolsa.trim().length === 0) {
    return 'El código de bolsa es obligatorio.';
  }


  return '';
};

export const validarCantidad = (cantidad) => {
  if (!cantidad || isNaN(cantidad)) {
    return 'La cantidad debe ser un número entero.';
  }


  return '';
};

export const validarFecha = (fecha) => {
  if (!fecha) {
    return 'La fecha es obligatoria.';
  }


  return '';
};

export const validarPorcentajeGerminacion = (porcentaje) => {
  if (!porcentaje || porcentaje.trim().length === 0) {
    return 'El porcentaje de germinación es obligatorio.';
  }


  return '';
};


export const validarFormularioSemilla = (semillas) => {
  const errores = {};

  const errorCodigoBolsa = validarCodigoBolsa(semillas.codigoBolsa);
  if (errorCodigoBolsa) {
    errores.codigoBolsa = errorCodigoBolsa;
  }

  const errorCantidad = validarCantidad(semillas.cantidad);
  if (errorCantidad) {
    errores.cantidad = errorCantidad;
  }

  const errorFechaRecepcion = validarFecha(semillas.fechaRecepcion);
  if (errorFechaRecepcion) {
    errores.fechaRecepcion = errorFechaRecepcion;
  }

  const errorFechaColecta = validarFecha(semillas.fechaColecta);
  if (errorFechaColecta) {
    errores.fechaColecta = errorFechaColecta;
  }

  const errorPorcentajeGerminacion = validarPorcentajeGerminacion(semillas.porcentajeGerminacion);
  if (errorPorcentajeGerminacion) {
    errores.porcentajeGerminacion = errorPorcentajeGerminacion;
  }


  return errores ;
};

export const validarNombrePlantacion = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre de la plantación es obligatorio.';
  }

  if (nombre.length < 3) {
    return 'El nombre de la plantación debe tener al menos 3 caracteres.';
  }

  return '';
};

export const validarDescripcionPlantacion = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
    return 'La descripción de la plantación es obligatoria.';
  }

  if (descripcion.length < 10) {
    return 'La descripción de la plantación debe tener al menos 10 caracteres.';
  }

  return '';
};

export const validarEspecies = (especies) => {
  if (!especies || especies.trim().length === 0) {
    return 'Las especies son obligatorias.';
  }

  return '';
};

export const validarFecha = (fecha, campo) => {
  if (!fecha || fecha.trim().length === 0) {
    return `La ${campo} es obligatoria.`;
  }

  // Ejemplo de validación simple de fecha
  const fechaRegExp = /^\d{4}-\d{2}-\d{2}$/;
  if (!fechaRegExp.test(fecha)) {
    return `La ${campo} debe tener el formato YYYY-MM-DD.`;
  }

  return '';
};

export const validarNumeroCosecha = (numeroCosecha) => {
  if (!numeroCosecha || numeroCosecha.trim().length === 0) {
    return 'El número de cosecha es obligatorio.';
  }

  if (isNaN(numeroCosecha)) {
    return 'El número de cosecha debe ser un número.';
  }

  return '';
};

export const validarFormularioPlantacion = (plantacion) => {
  const errores = {};



  const errorEspecies = validarEspecies(plantacion.especies);
  if (errorEspecies) {
    errores.especies = errorEspecies;
  }

  const errorFechaInicio = validarFecha(plantacion.fechaInicio, "fecha de inicio");
  if (errorFechaInicio) {
    errores.fechaInicio = errorFechaInicio;
  }

  const errorFechaCosecha = validarFecha(plantacion.fechaCosecha, "fecha de cosecha");
  if (errorFechaCosecha) {
    errores.fechaCosecha = errorFechaCosecha;
  }

  const errorNumeroCosecha = validarNumeroCosecha(plantacion.numeroCosecha);
  if (errorNumeroCosecha) {
    errores.numeroCosecha = errorNumeroCosecha;
  }

  return errores;
};

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
    return 'La descripción de la plantacion es obligatoria.';
  }

  if (descripcion.length < 10) {
    return 'La descripción de la plantacion debe tener al menos 10 caracteres.';
  }

  return '';
};

export const validarFormularioPlantacion = (nombre, descripcion) => {
  const errores = {};

  const errorNombre = validarNombrePlantacion(nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }

  const errorDescripcion = validarDescripcionPlantacion(descripcion);
  if (errorDescripcion) {
    errores.descripcion = errorDescripcion;
  }

  return errores;
};

export const validarNombrePlanta = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre de la planta es obligatorio.';
  }

  if (nombre.length < 3) {
    return 'El nombre de la planta debe tener al menos 3 caracteres.';
  }

  return '';
};

export const validarDescripcionPlanta = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
    return 'La descripción de la planta es obligatoria.';
  }

  if (descripcion.length < 10) {
    return 'La descripción de la planta debe tener al menos 10 caracteres.';
  }

  return '';
};

export const validarFormularioPlanta = (nombre, descripcion) => {
  const errores = {};

  const errorNombre = validarNombrePlanta(nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }

  const errorDescripcion = validarDescripcionPlanta(descripcion);
  if (errorDescripcion) {
    errores.descripcion = errorDescripcion;
  }

  return errores;
};

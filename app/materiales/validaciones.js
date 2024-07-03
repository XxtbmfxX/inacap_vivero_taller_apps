export const validarNombreMateriales = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre de los materiales es obligatorios.';
  }

  if (nombre.length < 3) {
    return 'El nombre de los materiales deben tener al menos 3 caracteres.';
  }

  return '';
};

export const validarDescripcionTarea = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
    return 'La descripción de los materiales son obligatorios.';
  }

  if (descripcion.length < 10) {
    return 'La descripción de los materiales deben tener al menos 10 caracteres.';
  }

  return '';
};

export const validarFormularioTarea = (nombre, descripcion) => {
  const errores = {};

  const errorNombre = validarNombreMateriales(nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }

  const errorDescripcion = validarDescripcionMateriales(descripcion);
  if (errorDescripcion) {
    errores.descripcion = errorDescripcion;
  }

  return errores;
};

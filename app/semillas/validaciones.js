export const validarNombreSemilla = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre de la semilla es obligatorio.';
  }

  if (nombre.length < 3) {
    return 'El nombre de la semilla debe tener al menos 3 caracteres.';
  }

  return '';
};

export const validarDescripcionSemilla = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
    return 'La descripción de la semilla es obligatoria.';
  }

  if (descripcion.length < 10) {
    return 'La descripción de la semilla debe tener al menos 10 caracteres.';
  }

  return '';
};

export const validarFormularioSemilla = (nombre, descripcion) => {
  const errores = {};

  const errorNombre = validarNombreSemilla(nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }

  const errorDescripcion = validarDescripcionSemilla(descripcion);
  if (errorDescripcion) {
    errores.descripcion = errorDescripcion;
  }

  return errores;
};

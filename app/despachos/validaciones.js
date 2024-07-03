export const validarNombreDespacho = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre del despacho es obligatorio.';
  }

  if (nombre.length < 3) {
    return 'El nombre del despacho debe tener al menos 3 caracteres.';
  }

  return '';
};

export const validarDescripcionDespacho = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
    return 'La descripción del despacho es obligatoria.';
  }

  if (descripcion.length < 10) {
    return 'La descripción del depacho debe tener al menos 10 caracteres.';
  }

  return '';
};

export const validarFormularioDespacho = (nombre, descripcion) => {
  const errores = {};

  const errorNombre = validarNombreDespacho(nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }

  const errorDescripcion = validarDescripcionDespacho(descripcion);
  if (errorDescripcion) {
    errores.descripcion = errorDescripcion;
  }

  return errores;
};

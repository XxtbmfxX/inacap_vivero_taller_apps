export const validarNombreQuimico = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre del químico es obligatorio.';
  }

  if (nombre.length < 3) {
    return 'El nombre del químico debe tener al menos 3 caracteres.';
  }

  return '';
};

export const validarDescripcionTarea = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
    return 'La descripción del químico es obligatoria.';
  }

  if (descripcion.length < 10) {
    return 'La descripción del químico debe tener al menos 10 caracteres.';
  }

  return '';
};

export const validarFormularioTarea = (nombre, descripcion) => {
  const errores = {};

  const errorNombre = validarNombreQuimico(nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }

  const errorDescripcion = validarDescripcionQuimico(descripcion);
  if (errorDescripcion) {
    errores.descripcion = errorDescripcion;
  }

  return errores;
};

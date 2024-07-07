
export const validarNombreQuimico = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre del químico es obligatorio.';
  }

  if (nombre.length < 3) {
    return 'El nombre del químico debe tener al menos 3 caracteres.';
  }

  return '';
};

export const validarDescripcionQuimico = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
    return 'La descripción del químico es obligatoria.';
  }

  if (descripcion.length < 10) {
    return 'La descripción del químico debe tener al menos 10 caracteres.';
  }

  return '';
};

export const validarFechaIngreso = (fechaIngreso) => {
  if (!fechaIngreso || fechaIngreso.trim().length === 0) {
    return 'La fecha de ingreso es obligatoria.';
  }


  return '';
};

export const validarContenido = (contenido) => {
  if (!contenido || contenido.trim().length === 0) {
    return 'El contenido es obligatorio.';
  }


  return '';
};


export const validarFormularioQuimico = (quimico) => {
  const errores = {};

  const errorNombre = validarNombreQuimico(quimico.nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }


  const errorContenido = validarContenido(quimico.contenido);
  if (errorContenido) {
    errores.contenido = errorContenido;
  }


  return errores;
};

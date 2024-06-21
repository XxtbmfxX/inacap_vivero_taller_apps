export const validarNombreTarea = (nombre) => {
    if (!nombre || nombre.trim().length === 0) {
      return 'El nombre de la tarea es obligatorio.';
    }
  
    if (nombre.length < 3) {
      return 'El nombre de la tarea debe tener al menos 3 caracteres.';
    }
  
    return '';
  };
  
  export const validarDescripcionTarea = (descripcion) => {
    if (!descripcion || descripcion.trim().length === 0) {
      return 'La descripción de la tarea es obligatoria.';
    }
  
    if (descripcion.length < 10) {
      return 'La descripción de la tarea debe tener al menos 10 caracteres.';
    }
  
    return '';
  };
  
  export const validarFormularioTarea = (nombre, descripcion) => {
    const errores = {};
  
    const errorNombre = validarNombreTarea(nombre);
    if (errorNombre) {
      errores.nombre = errorNombre;
    }
  
    const errorDescripcion = validarDescripcionTarea(descripcion);
    if (errorDescripcion) {
      errores.descripcion = errorDescripcion;
    }
  
    return errores;
  };
  
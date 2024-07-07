export const validarNombreMaterial = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return 'El nombre del material es obligatorio.';
  }
  if (nombre.length < 3) {
    return 'El nombre del material debe tener al menos 3 caracteres.';
  }
  return '';
};

export const validarUnidadDeMedida = (unidadDeMedida) => {
  if (!unidadDeMedida || unidadDeMedida.trim().length === 0) {
    return 'La unidad de medida es obligatoria.';
  }
  return '';
};

export const validarCantidadMaterial = (cantidad) => {
  if (!cantidad || cantidad.trim().length === 0) {
    return 'La cantidad es obligatoria.';
  }
  if (isNaN(cantidad)) {
    return 'La cantidad debe ser un número válido.';
  }
  return '';
};

export const validarFormularioMaterial = (nombre, unidadDeMedida, cantidad) => {
  const errores = {};

  const errorNombre = validarNombreMaterial(nombre);
  if (errorNombre) {
    errores.nombre = errorNombre;
  }

  const errorUnidadDeMedida = validarUnidadDeMedida(unidadDeMedida);
  if (errorUnidadDeMedida) {
    errores.unidadDeMedida = errorUnidadDeMedida;
  }

  const errorCantidad = validarCantidadMaterial(cantidad);
  if (errorCantidad) {
    errores.cantidad = errorCantidad;
  }

  return errores;
};

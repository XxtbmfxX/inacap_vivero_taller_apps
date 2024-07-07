export const validarEspecie = (especie) => {
  if (!especie || especie.trim().length === 0) {
    return 'La especie es obligatoria.';
  }

  if (especie.length < 3) {
    return 'La especie debe tener al menos 3 caracteres.';
  }

  return '';
};

export const validarAñoDespacho = (añoDespacho) => {
  if (!añoDespacho || añoDespacho.trim().length === 0) {
    return 'El año de despacho es obligatorio.';
  }

  if (!/^\d{4}$/.test(añoDespacho)) {
    return 'El año de despacho debe ser un año válido.';
  }

  return '';
};

export const validarNumeroSector = (numeroSector) => {
  if (!numeroSector || numeroSector.trim().length === 0) {
    return 'El número de sector es obligatorio.';
  }

  if (numeroSector.length < 1) {
    return 'El número de sector debe tener al menos 1 carácter.';
  }

  return '';
};

export const validarNumeroPlatabanda = (numeroPlatabanda) => {
  if (!numeroPlatabanda || numeroPlatabanda.trim().length === 0) {
    return 'El número de platabanda es obligatorio.';
  }

  if (numeroPlatabanda.length < 1) {
    return 'El número de platabanda debe tener al menos 1 carácter.';
  }

  return '';
};

export const validarFormularioPlanta = (especie, añoDespacho, numeroSector, numeroPlatabanda) => {
  const errores = {};

  const errorEspecie = validarEspecie(especie);
  if (errorEspecie) {
    errores.especie = errorEspecie;
  }

  const errorAñoDespacho = validarAñoDespacho(añoDespacho);
  if (errorAñoDespacho) {
    errores.añoDespacho = errorAñoDespacho;
  }

  const errorNumeroSector = validarNumeroSector(numeroSector);
  if (errorNumeroSector) {
    errores.numeroSector = errorNumeroSector;
  }

  const errorNumeroPlatabanda = validarNumeroPlatabanda(numeroPlatabanda);
  if (errorNumeroPlatabanda) {
    errores.numeroPlatabanda = errorNumeroPlatabanda;
  }

  return errores;
};

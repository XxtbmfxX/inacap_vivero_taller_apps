/**
 * Formatea una fecha en una cadena con formato 'YYYY-MM-DD'.
 *
 * @param {String} dateString - La cadena de fecha a formatear.
 * @returns {String} La fecha formateada en formato 'YYYY-MM-DD'.
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
};

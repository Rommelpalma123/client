export const  verificarCampos = (nombre, email, asunto, descripcion) => {
  if (!nombre) {
    return "El campo Nombre es requerido.";
  }
  if (!email) {
    return "El campo Email es requerido.";
  }
  if (!asunto) {
    return "El campo Asunto es requerido.";
  }
  if (!descripcion) {
    return "El campo Descripción es requerido.";
  }
  return "";
}


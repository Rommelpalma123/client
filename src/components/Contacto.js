import React, { useState } from "react";
import "./css/footer.css";
import axios from "axios";
import uniquid from "uniquid";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [asuntoError, setAsuntoError] = useState("");
  const [descripcionError, setDescripcionError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false); // Nuevo estado

  function verificarCampos() {
    let isValid = true;

    if (!nombre.trim()) {
      setNombreError("Por favor, ingrese su nombre");
      isValid = false;
      setTimeout(() => {
        setNombreError("");
      }, 2000);
    } else {
      setNombreError("");
    }

    if (!email) {
      setEmailError("Por favor, ingrese su correo electrónico");
      isValid = false;
      setTimeout(() => {
        setEmailError("");
      }, 2000);
    } else {
      setEmailError("");
    }

    if (!asunto.trim()) {
      setAsuntoError("Por favor, ingrese un asunto");
      isValid = false;
      setTimeout(() => {
        setAsuntoError("");
      }, 2000);
    } else {
      setAsuntoError("");
    }

    if (!descripcion) {
      setDescripcionError("Por favor, ingrese una descripción");
      isValid = false;
      setTimeout(() => {
        setDescripcionError("");
      }, 2000);
    } else {
      setDescripcionError("");
    }

    if (!isValid) {
      setMensaje("Por favor, llene todos los campos del formulario.");
      setTimeout(() => {
        setMensaje("");
      }, 1000);
    } else {
      setMensaje("");
    }

    return isValid;
  }

  function agregar() {
    var usuario = {
      nombre: nombre,
      email: email,
      asunto: asunto,
      descripcion: descripcion,
      idcontacto: uniquid(),
    };
    function limpiarInputs() {
      setNombre("");
      setEmail("");
      setAsunto("");
      setDescripcion("");
    }
    if (verificarCampos()) {
      axios
        .post("https://portafolio-5yko.onrender.com/api/contacto", usuario)
        .then((res) => {
          console.log(res, "el mensaje se envio correctamente");
          limpiarInputs();
          setEnviado(true); // Establecer el estado como true
        })
        .catch((err) => {
          console.log("error al enviar los datos", err.message);
        });
    }
  }

  // Esperar 2 segundos y ocultar el mensaje de enviado

  let confirmacion;
  if (enviado === true) {
    confirmacion = (
      <div>
        <div>
          {enviado && (
            <div
              id="mensaje-enviado"
              className="alert alert-success"
              role="alert"
            >
              ¡El formulario se ha enviado correctamente!
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <h6 className="py-4 text-center fs-4">
          <b>
            Aqui puedes contactarte conmigo, al enviar los datos solicitados,
            respondere, lo mas rapido posible, cuando me llegue la notificacion
            de un nuevo registro, gracias por tu atencion.
          </b>
        </h6>
      </div>

      <div className="container">
        {confirmacion}
        {mensaje && (
          <div className="alert alert-danger" role="alert">
            {mensaje}
          </div>
        )}
        <div className="row">
          <div className="col mt-5">
            <label className="form-label">
              <h5>Nombre</h5>
            </label>
            <input
              type="text"
              className="borde form-control"
              placeholder="Nombres"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              onFocus={() => {
                setNombreError("");
              }}
            />
            {nombreError && (
              <div className="alerta" role="alert">
                <p className="error">{nombreError}</p>
              </div>
            )}
          </div>
          <div className="col mt-5">
            <label className="form-label">
              <h5>Email</h5>
            </label>
            <input
              type="email"
              className="borde form-control"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => {
                setEmailError("");
              }}
            />
            {emailError && (
              <div className="alerta" role="alert">
                <p className="error">{emailError}</p>
              </div>
            )}
          </div>
          <div className="mt-5">
            <label className="form-label">
              <h5>Asunto</h5>
            </label>
            <input
              className="borde form-control"
              type="text"
              placeholder="Escriba un asunto"
              value={asunto}
              onChange={(e) => {
                setAsunto(e.target.value);
              }}
              onFocus={() => {
                setAsuntoError("");
              }}
            />
            {asuntoError && (
              <div className="alerta" role="alert">
                <p className="error">{asuntoError}</p>
              </div>
            )}
          </div>

          <div className="mb-3 mt-5">
            <label className="form-label">
              <h5>Descripción</h5>
            </label>
            <textarea
              placeholder="Descripción"
              className="borde form-control"
              rows="3"
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
              onFocus={() => {
                setDescripcionError("");
              }}
            ></textarea>
            {descripcionError && (
              <div className="alerta" role="alert">
                <p className="error">{descripcionError}</p>
              </div>
            )}
          </div>
          <div className="d-grid gap-3 col-8 mx-auto">
            <button onClick={agregar} className="btn btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;

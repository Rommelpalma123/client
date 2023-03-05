import { Outlet, Link } from "react-router-dom";
import "./css/movil.css";

const Barra = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler border-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link
                  className="nav-link text-light fs-5"
                  aria-current="page"
                  to="/client"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="/about">
                  Habilidades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <span className="text-light fs-3">
              <b className="parrafo">Bienvenido a mi portafolio personal</b>
            </span>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Barra;

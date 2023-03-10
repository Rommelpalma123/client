import imagen from "./imgs/logo1922.png";
import "../css/footer.css";
import Whatsapp from "../Whatsapp";

function Informacion() {
  return (
    <div>
      <div className="container overflow-hidden mt-5">
        <div className="row">
          <div className="text-center">
            <img
              src={imagen}
              className="rounded-circle imagen"
              alt="imagen de perfil"
            />
          </div>
          <div className="col mt-2">
            <h3 className="text-center">
              <b>Hola a todos soy Rommel Palma</b>
            </h3>
            <p className="info">
              Soy desarrollador de software desde hace un año, con conocimientos
              en diferentes tecnologias tanto web como para dispositivos moviles
            </p>
            <p className="fs-6 info">
              Soy de nacionalidad ecuatoriana, estudie en la universidad Laica
              Eloy Alforo de Manabí,{" "}
              <b>Ingeniería en Tecnologias de la Informacion</b>, donde aprendi
              de varias tecnologias, que eran nesecarias pero no del todo, en el
              sector laboral es muy diferente porque se requieren de otras
              tecnologias y de mas conocimientos
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <Whatsapp />
        </div>
      </div>
    </div>
  );
}

export default Informacion;

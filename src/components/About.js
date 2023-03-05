import React from "react";
import "./css/about.css";
const js =
  "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg";
const html =
  "https://borjaarandavaquero.com/wp-content/uploads/2021/07/que-es-html.jpg";
const css =
  "https://extassisnetwork.com/tutoriales/wp-content/uploads/Que-es-CSS.jpg";
const rj = "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png";
const jv =
  "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-java/sta-je-java.jpg";
const git = "https://nodd3r.com/media/blog/Portadas_blog_21.png";
const node =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png";
const npm =
  "https://codigoonclick.com/wp-content/uploads/2019/05/npm-nodejs.jpeg";
const mg =
  "https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2019/01/mongodb.png?width=1200&enable=upscale";
const pg = "https://audviklabs.in/wp-content/uploads/2022/01/postgreSQL.png";
const bootstrap =
  "https://www.escolati.com.br/wp-content/uploads/2022/08/bootstrap-750x410.png";

const About = () => {
  return (
    <div className="container text-center mt-2">
      <h2>
        <b>Conjunto de habilidades</b>
      </h2>
      <div className="row row-cols-2 row-cols-lg-4 g-2 mt-2">
        <div className="col">
          <div className="card sombra" style={{ cursor: "pointer" }}>
            <h5 className="card-title">JavaScript</h5>
            <img
              src={js}
              className="imagen-habilidad"
              height="100px"
              alt="javascript"
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">HTML</h5>
            <img
              src={html}
              className="imagen-habilidad"
              height="100px"
              alt="imagen html"
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">CSS</h5>
            <img
              src={css}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">React</h5>
            <img
              src={rj}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">Java</h5>
            <img
              src={jv}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">Git</h5>
            <img
              src={git}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">Node.js</h5>
            <img
              src={node}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">Npm</h5>
            <img
              src={npm}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">MongoDB</h5>
            <img
              src={mg}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">PostgreSQL</h5>
            <img
              src={pg}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ cursor: "pointer" }}>
            <h5 className="card-title">Bootstrap</h5>
            <img
              src={bootstrap}
              className="imagen-habilidad"
              height="100px"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

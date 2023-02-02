import React from "react";
import './css/about.css'
const js = "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg";
const html = "https://borjaarandavaquero.com/wp-content/uploads/2021/07/que-es-html.jpg";
const css = "https://extassisnetwork.com/tutoriales/wp-content/uploads/Que-es-CSS.jpg";
const rj = "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png";
const jv = "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-java/sta-je-java.jpg";
const git = "https://nodd3r.com/media/blog/Portadas_blog_21.png";
const node = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png";
const npm = "https://codigoonclick.com/wp-content/uploads/2019/05/npm-nodejs.jpeg"
const mg = "https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2019/01/mongodb.png?width=1200&enable=upscale";
const pg = "https://audviklabs.in/wp-content/uploads/2022/01/postgreSQL.png";

const About = () =>
{
    return(
        <div className="container text-center py-5">
        <h2 className="py-4"><b>Conjunto de habilidades</b></h2>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div className="col">
                    <div className="card sombra" style={{ cursor:"pointer"}}>
                    <h5 className="card-title">JavaScript</h5>
                        <img src={js} className="card-img-top" height="100px" alt="javascript" />
                        <div className="card-body">
                            <p className="card-text">
                            he trabajado con javascript y es un lenguaje de progrogramacion potente de
                            para construir appliciones super rapido.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card"  style={{ cursor:"pointer"}}>
                <h5 className="card-title">HTML</h5>
                    <img src={html}  className="card-img-top" height="100px" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                        he trabajado con html para crear paginas informativas, bastante simples
                        de construir, el cual solo sirve para cosas basicas
                        </p>
                    </div>
                </div>
                </div>
                <div className="col">
                    <div className="card" style={{ cursor:"pointer"}}>
                    <h5 className="card-title">CSS</h5>
                        <img src={css}  className="card-img-top" height="100px" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                            con css he trabajado para crear estilos muy personalizados, cosas que 
                            con una libreria como boostrap no se puede realizar, tambien he trabajado con
                            boostrap
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ cursor:"pointer"}}>
                    <h5 className="card-title">React</h5>
                        <img src={rj}  className="card-img-top" height="100px" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                            he trabajado con react para aplicaciones web y es muy sencillo de usar 
                            y un framework estupendo para el desarrollo
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ cursor:"pointer"}}>
                    <h5 className="card-title">Java</h5>
                        <img src={jv}  className="card-img-top" height="100px" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                            con java he trabajado para creacion de aplicaciones moviles nativa de android,
                            basicamente una apicacion movil  
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card" style={{ cursor:"pointer"}}>
                <h5 className="card-title">Git</h5>
                    <img src={git}  className="card-img-top" height="100px" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                        git es una herramienta portente para control de versiones, he trabajado en 
                        equipos para gestionar nuestras versiones de software
                        </p>
                    </div>
                </div>
                </div>
                <div className="col">
                    <div className="card" style={{ cursor:"pointer"}}>
                    <h5 className="card-title">Node.js</h5>
                        <img src={node}  className="card-img-top" height="100px" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                            node es una herramienta potente para creaciones de backend, al ser 
                            nativo para javascript he trabajado con node.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card" style={{ cursor:"pointer"}}>
                <h5 className="card-title">Npm</h5>
                        <img src={npm}  className="card-img-top" height="100px" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                            npm es el manejador de paquetes mas usado para node, en mi caso es el 
                            que prefieron para trabajar con node.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card" style={{ cursor:"pointer"}}>
                <h5 className="card-title">MongoDB</h5>
                        <img src={mg}  className="card-img-top" height="100px" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                            mongo es la base de datos no sql mas usada, en mis proyectos he usado esta 
                            herramienta y es  muy facil de usar
                            </p>
                        </div>
                </div>
                </div>
                <div className="col">
                <div className="card" style={{ cursor:"pointer"}}>
                <h5 className="card-title">PostgreSQL</h5>
                        <img src={pg}  className="card-img-top" height="100px" alt="..." />
                        <div className="card-body">
                            <p className    ="card-text">
                            postgreSQL una base de datos relational muy potente para crear
                            un backend.
                            </p>
                        </div>
                </div>
                </div>  
            </div>
        </div>
    )   
}

export default About;
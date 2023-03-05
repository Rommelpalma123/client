const Main = () => {
  return (
    <div className="mt-5 container">
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header">
            <b>
              <i className="fa-brands fa-java" /> Programacion con Java
            </b>
          </div>
          <div className="card-body bg-dark">
            <h5 className="card-title fs-5 text-light">Android nativo</h5>
            <p className="card-text text-light fs-6">
              Uno de mis trabajos en el desarrollo nativo con andorid es una
              aplicacion llamada acolitame la cual su funcionalidad es ayudar a
              estudiantes a conseguir a una persona que realize una tarea en
              especifico, esta aplicacion aun esta en desarollo y esta siendo
              construida con un grupo de 4 personas.
            </p>
          </div>
        </div>
        <div className="card border-danger mb-3">
          <div className="card-header">
            <b>
              <i className="fa-brands fa-js" /> Programacion con JavaScript
            </b>
          </div>
          <div className="card-body bg-dark">
            <h5 className="card-title fs-5 text-light">Desarrollo web</h5>
            <p className="card-text fs-6 text-light">
              Con javascript he realizado trabajos web como e-commerce y de mas
              aplicaciones, para trabajar con el backend y con node.js como
              entorno de ejecucion, para configurarlo y enviar datos a base de
              datos como mongo, firebase y postgresSQL, consumir apis con axios
              y muchas cosas mas que nos brinda javascript
            </p>
          </div>
        </div>
        <div className="card border-primary mb-3">
          <div className="card-header">
            <b>
              <i className="fa-brands fa-react" /> React
            </b>
          </div>
          <div className="card-body bg-dark">
            <h5 className="card-title fs-5 text-light">Desarollo web</h5>
            <p className="card-text fs-6 text-light">
              react es un framework, como lo considero yo, muy potente para el
              desarrollo web ya que este tienes muchas funcionalidades una de
              ellas son los hooks que es una funcionalidad poderosa de react,
              esta pequeña aplicacion esta hecha con la esencia de react, asi
              como otras aplicaciones de mi auditoria, es un framework facil de
              usar y de entender
            </p>
            <h6 className="card-title fs-5 text-light">
              Aplicaciones desarolladas
            </h6>
            <a
              className="text-decoration-none"
              target={"_blank"}
              style={{ color: "red" }}
              href="https://rommelpalma123.github.io/api-pokemon-github"
              rel="noreferrer"
            >
              Aplicacion consumiendo api de pokemon y github
            </a>
          </div>
        </div>
        <div className="card border-success mb-3">
          <div className="card-header">
            <b>
              <i className="fa-brands fa-react" /> React Native
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import imagen from './imgs/logo1922.png';
import '../css/movil.css'


function Informacion() 
{
    return(
    <div>
        <div className="container overflow-hidden mt-5">
            <div className="row">
                <div className="col text-center">
                    <img src={imagen} height='200' width='200'className='rounded-circle' alt='imagen de perfil'/>
                </div>
                <div className="col">
                        <h3><b>Hola a todos soy Rommel Palma</b></h3>
                        <p>
                            Soy desarrollador de software desde hace un año,
                            con conocimientos en diferentes lenguajes de programación
                        </p>
                        <br />
                        <p className="text-left fs-6">
                            Soy de nacionalidad ecuatoriana, estudie en la universidad Laica Eloy Alforo
                            de Manabí, <b>Ingeniería en Tecnologias de la Informacion</b>, donde aprendi
                            de varias tecnologias, que eran nesecarias pero no del todo, en el sector laboral
                            es muy diferente porque se requieren de otras tecnologias y de mas conocimientos 
                        </p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Informacion;
import '../css/about.css'
import '../css/movil.css'


const Footer = () => {
    return (
    <div class="mt-5">
            <footer className="bg-dark text-white py-5">
                <div className="container bg-dark py-2">
                    <div className="row">
                        <div className="col text-start">
                            <h4>Contactame</h4>
                                <ul className="list-unstyled">
                                    <li>Dirección: Ecuador - Manabi - Portoviejo</li>
                                    <li>Teléfono: 0967760813</li>
                                    <li>Email: palmarommel.2000@gmail.com</li>
                                </ul>
                        </div>
                        <div className="col text-start">
                            <h4>Puedes Encontrarme en:</h4>
                            <ul className="list-unstyled text-decoration-none">
                        
                                <li><a className="text-decoration-none text-white" 
                                href="https://www.facebook.com/profile.php?id=100010333634907" 
                                target="_blank" rel="noreferrer">&nbsp;
                                <i class="fab fa-facebook-f"></i>&nbsp; Facebook</a></li>

                                <li><a className="text-decoration-none text-white" 
                                href="https://www.linkedin.com/in/rommel-palma-7aa5b1223/" 
                                target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i>&nbsp; Linkedin</a></li>

                                <li><a className="text-decoration-none text-white" 
                                href="https://github.com/Rommelpalma123?tab=repositories" 
                                target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>&nbsp; Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        
    </div>
    )
}

export default Footer;

import Footer from "./pages/Footer";
import Informacion from "./pages/Informacion";
import Main from "./pages/Main";

function Layout()
{
    return(
      <div>
        <div className="row g-0">
          <div className="col-sm-6 col-md-6 fs-5">
            <Informacion />
          </div>
          <div className="col-12 col-md-6 fs-5">
            <Main />
          </div>
          <div className="col-6 col-md-12 fs-5">
            <Footer />
          </div>
        </div>
    </div>
    )
}

export default Layout;
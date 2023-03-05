import './css/about.css'

const Whatsapp = () => {
  const whatsappMessage = "Hola, estoy interesado en tu trabajo ✌️";
  const phoneNumber = "967760813";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="boton">
          WhatsApp <i className="fa-brands fa-whatsapp" />
        </button>
      </a>
    </div>
  );
};

export default Whatsapp;

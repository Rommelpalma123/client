import React, { useState } from 'react';
import './css/footer.css'
import axios from 'axios';
import uniquid from 'uniquid';
function Contacto ()
{
    const[nombre, setNombre] = useState('');
    const[email, setEmail] = useState('');
    const[asunto, setAsunto] = useState('');
    const[descripcion, setDescripcion] = useState('');

    function agregar()
    {
        var usuario =
        {
            nombre: nombre,
            email: email,
            asunto: asunto,
            descripcion: descripcion,
            idcontacto: uniquid()
        }
        console.log(usuario);
        axios.post('https://portafolio-5yko.onrender.com/api/contacto', usuario)
        .then(res => { alert(res.data)})
        .catch(err => { alert('no se puede enviar el formuario')});
    }
    return(
        <div>   
            <div className='container'>
                <h6 className="py-4 text-center fs-4"><b>
                    Aqui puedes contactarte conmigo, al enviar los datos solicitados,
                    respondere, lo mas rapido posible, cuando me llegue la notificacion de un
                    nuevo registro, gracias por tu atencion.
                </b></h6>
            </div>
        
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <label className="form-label"><h5>Nombre</h5></label>
                        <input type="text" className="borde form-control" 
                        placeholder="Nombres" value={nombre} onChange={(e) => {setNombre(e.target.value)}} required/>
                    </div>
                    <div className="col mt-5">
                        <label className="form-label"><h5>Email</h5></label>
                        <input type="email" className="borde form-control" 
                        placeholder="ejemplo@gmail.com" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        
                    </div>
                    <div className="mt-5">
                    <label className="form-label"><h5>Asunto</h5></label>
                    <input className="borde form-control"
                    type="text" placeholder="Escriba un asunto" value={asunto} onChange={(e) => {setAsunto(e.target.value)}}/>
                    </div>
                    <div className="mb-3 mt-5">
                        <label className="form-label"><h5>Descripción</h5></label>
                        <textarea placeholder="Descripción"
                        className="borde form-control" 
                        rows="3" value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}}></textarea>
                    </div>
                    <div className="d-grid gap-3 col-8 mx-auto">
                        <button onClick={agregar} className="btn btn-primary">Enviar</button>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Contacto;
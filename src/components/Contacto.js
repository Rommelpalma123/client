import React, { useState } from 'react';
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
        axios.post('http://localhost:5000/api/contacto', usuario)
        .then(res => { alert('debe llenar todos los campos', res.data)})
        .catch(err => { alert('llena todos los campos', err)})
    }
    return(
        <div>   
            <div className='container'>
                <h6 className="py-4 text-center"><b>
                    Aqui puedes contactarte conmigo, al enviar los datos solicitados,
                    respondere, lo mas rapido posible, cuando me llegue la notificacion de un
                    nuevo registro, gracias por tu atencion.
                </b></h6>
            </div>
        
            <div className="container col-5 mt-5">
                <div className="row">
                    <div className="col mt-5">
                        <label className="form-label"><h5>Nombre</h5></label>
                        <input type="text" className="form-control border border-secondary" 
                        placeholder="Nombres" value={nombre} onChange={(e) => {setNombre(e.target.value)}} required/>
                    </div>
                    <div className="col mt-5">
                        <label className="form-label"><h5>Email</h5></label>
                        <input type="email" className="form-control border border-secondary" 
                        placeholder="ejemplo@gmail.com" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        
                    </div>
                    <div className="mt-5">
                    <label className="form-label"><h5>Asunto</h5></label>
                    <input className="form-control border border-secondary"
                    type="text" placeholder="Escriba un asunto" value={asunto} onChange={(e) => {setAsunto(e.target.value)}}/>
                    </div>
                    <div className="mb-3 mt-5">
                        <label className="form-label"><h5>Descripción</h5></label>
                        <textarea placeholder="Descripción"
                        className="form-control border border-secondary" 
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
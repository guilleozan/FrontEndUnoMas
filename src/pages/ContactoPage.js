import React,{useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

 



const ContactoPage =(props) => {
   

      const initialForm = { 
        nombre: '', 
        email: '' , 
        telefono: '', 
        mensaje: '',
      }

      const [sending, setSending] = useState(false); 
      const [ msg, setMsg] = useState( ' ' ) ; 
      const [formData, setFormData] = useState(initialForm);

      const handleChange = e =>{
        const{ name, value} = e.target;
        setFormData(oldData => ({
          ...oldData,
          [name]:value
        }));
      }

      const handleSubmit = async e=>{
        e.preventDefault();
        setMsg( ' ' );
        setSending( true)
        const response = await axios.post( 'http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg( response.data.message);
          if( response.data.error===false){
            setFormData(initialForm)
          }

      }

      return( 

        <div className="container">

        <Form action='/contacto' method='post' onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='descripcionFormulario'>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder=""  name='nombre' value={formData.nombre} required onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='descripcionFormulario'>telefono</Form.Label>
            <Form.Control type="text" placeholder="" name='telefono'  value={formData.telefono} required onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='descripcionFormulario'>Email address</Form.Label>
            <Form.Control type="email" placeholder="" name='email' value={formData.email} required onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='descripcionFormulario'>Consulta</Form.Label>
            <Form.Control as="textarea" rows={3}  name='mensaje' value={formData.mensaje} required onChange={handleChange}/>
          </Form.Group>
          <div className='botoneEnviar'>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <button className='btn btn-primary descripcionFormulario' type='submit'>Enviar consulta</button>
         </div> 
        </Form>
        
       
       

          
        
    </div>
  
		


   

  
		
    );
}





export default ContactoPage;



// {/* 

//         <form action='/contacto' className="row g-3 " onSubmit={handleSubmit} >
//             <div className="col-md-4">
//               <label for="" className="form-label"> Nombre </label>
//               <input  type="text" class="form-control" name='name' value={formData.nombre} required />
//               <div className="valid-feedbak">
                                        
//               </div>
//             </div>
//             <div className="col-md-4">
//               <label for="validationCustom02" className="form-label">Apellido</label>
//               <input type="text" class="form-control" id="validationCustom02" value={formData.apellido} required />
//               <div className="valid-feedback">
            
//               </div>
//             </div>
//             <div className="col-md-4">
//               <label for="validationCustomUsername" className="form-label">Email</label>
//                 <div className="input-group has-validation">
//                         <span className="input-group-text" id="inputGroupPrepend">@</span>
//                         <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required  value={formData.email}/>
//                     <div className="invalid-feedback">
//                      Please choose a username.
//                     </div>
//                  </div>
//             </div>

//             <div className="col-md-6">
//                         <label for="validationCustom03" className="form-label">Ciudad</label>
//                          <input type="text" class="form-control" id="validationCustom03" required />
//               <div className="invalid-feedback">
//                         Please provide a valid city.
//               </div>
//             </div>

//             <div className="col-md-3">
//                     <label for="validationCustom04" className="form-label">Provicncia</label>
//                     <select className="form-select" id="validationCustom04" required >
//                       <option selected disabled value="Provicncia">Elige</option><option>Buenos Aires</option><option>Catamarca</option><option>Cordoba</option>
//                      <option>Mendoza</option><option>Salta</option><option>Santa Fe</option><option>Misiones</option><option>Santiago del Estero</option><option>Patagonia</option>
//                      </select>
//                 <div className="invalid-feedback">
//                 Please select a valid state.
//                 </div>
//             </div>

//             <div className="col-md-3">
//                          <label for="validationCustom05" className="form-label">Codigo Postal</label>
//                          <input type="text" class="form-control" id="validationCustom05" required />
//               <div className="invalid-feedback">
//                          Please provide a valid zip.
//               </div>
//             </div>


            




//              */}
//              <div>

//             <Form>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="name@example.com" />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>Example textarea</Form.Label>
//                 <Form.Control as="textarea" rows={3} />
//               </Form.Group>
//             </Form>
//                         <div class="input-group">
//                     <span class="input-group-text">Consulta</span>
//                     <textarea class="form-control" aria-label="With textarea"></textarea>
//           </div>
             
             
//                 <div className="col-12">
//                 <button className="btn btn-primary" type="submit">Enviar Consulta</button>
//                 </div>
//          </form> <br/>
//          {sending? <p> Enviando... </p> :null}
//          {msg ? <p>msg</p>:null}
        
//     </div>
    
//  import '../../styles/footer.css'

// import React from 'react';
// const Footer =(props) => {
//     return( 
// 	<section>
//          <div className="contenedor-footer">

// 		 <div><button className="btn btn-lg" >  <i class="bi bi-facebook" ></i> </button></div>

//         <div><button className="btn btn-lg"><i className="bi bi-instagram" ></i></button></div>

//         <div><button class="btn btn-lg"><i  className="bi bi-twitter" ></i></button></div>
       
//         <div><button className="btn btn-lg"><i className="bi bi-envelope"></i> </button></div>

//         {/* intente poner los encaces para que se redirijan a las paginas correspondientes
//         pero las redireccionaba con la siguiente url (localhost:3001 http:www.fb.com ) y asi con cada una
//         de los botones.
//          */}
		 	
// 		</div>
// 			<div className="derechos">
// 				<p> Diplo UTN por Guillermo Ozan</p>
// 			</div>
// 	</section>	
//     );
// }


import '../../styles/footer.css';
import {NavLink} from 'react-router-dom';
import Link from 'react-router-dom';
import React,{Component} from 'react';
import cdbreact from'cdbreact';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox} from 'cdbreact';



class Footer extends Component {
   render(){
   return(
       <div>    
    <CDBFooter className="shadow ftr">
     <CDBBox display="flex" flex="column" className="mx-auto py-4" style={{ width: '90%' }}>
       <CDBBox display="flex" justifyContent="between" className="flex-wrap">
         <CDBBox>
           <a href="/" className="d-flex align-items-center p-0 text-dark">
           
             <img src="imagenes/P1.jpg" alt=""  width="100px" />
             {/* <span className="ml-3 h5 font-weight-bold"></span> */}
           </a>
           <p className="my-3" style={{ width: '250px' }}>
             We are creating High Quality Resources and tools to help people during the
             developement of our projects
           </p>
           <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark"  className=" App-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
               <CDBIcon fab icon=" bi-facebook" />
             </CDBBtn>
             <CDBBtn flat color="dark" className="mx-3 App-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
               <CDBIcon fab icon="twitter"  />
             </CDBBtn>
             <CDBBtn flat color="dark"className=" App-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
               <CDBIcon fab icon="instagram" />
             </CDBBtn>
             <CDBBtn flat color="dark"className="mx-3 App-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer" >
               <CDBIcon fab icon="youtube" />
             </CDBBtn>
           </CDBBox>
         

        </CDBBox> 
       
         <CDBBox>
           <p className="h5 mb-4" style={{ fontWeight: '600' }}>
             FaQs
           </p>
           <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
             <CDBFooterLink href="/">Resources</CDBFooterLink>
             <CDBFooterLink href="/about">About Us</CDBFooterLink>
             <CDBFooterLink href="/">Contact</CDBFooterLink>
             <CDBFooterLink href="/">Blog</CDBFooterLink>
           </CDBBox>
         </CDBBox>
         <CDBBox>
           <p className="h5 mb-4" style={{ fontWeight: '600' }}>
             Help
           </p>
           <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
             <CDBFooterLink href="/">Support</CDBFooterLink>
             <CDBFooterLink href="/">Call us</CDBFooterLink>
             <CDBFooterLink href="/">Privacy Policy</CDBFooterLink>
           </CDBBox>
         </CDBBox>
         <CDBBox>
           <p className="h5 mb-4" style={{ fontWeight: '600' }}>
             Products
           </p>
           <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
             <CDBFooterLink href="/">Online Shop</CDBFooterLink>
             
             <CDBFooterLink href="/">Contrast</CDBFooterLink>
           </CDBBox>
         </CDBBox>
       </CDBBox>
       <small className="text-center mt-5">&copy; Uno mas del monton, 2022. All rights reserved.</small>
     </CDBBox>
   </CDBFooter>
   </div>  

         
   ); 
   };
}

export default Footer;











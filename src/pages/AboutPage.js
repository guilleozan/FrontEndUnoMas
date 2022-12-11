

import React from 'react';
const About =(props) => {
    return( 
        <section>
            <div className="nosotros">
                <h2 class="texto-nosotros"> 
                <p> &iquest; Quiénes somos, quién soy? </p>
                <p>Un grupo de amigos que quieren compartir todo lo aprendido con vos.</p>
               <p> Misión: Creemos que sos unico valorandote , cuidando tu identidad con productos acordes a vos.</p> 


               <p> Valores:  Transparencia: ser francos y sinceros con nuestros clientes en todo momento, priorizando la satisfacción total.  </p>


               <p> Lealtad: Reconocer y valorar a las personas, apreciando siempre su vinculación con la marca. </p>


               <p> Compromiso: nos comprometemos con la palabra dada y la obligación contraída para lograr la satisfacción total del cliente.  </p>


               <p> Servicio: nos esforzamos en comprender y escuchar a nuestros clientes para brindarle siempre experiencias y productos acordes a sus expectativas.  </p>


                </h2>
            </div>
            <div id= "menu">
                  <video className="video"  loop autoplay preload muted>
                    <source src="imagenes/v4.mp4" type="video/mp4" codecs="avc1, mp4a" />
                    </video>
    
    
            </div>


        </section>
		
    );
}

export default About;
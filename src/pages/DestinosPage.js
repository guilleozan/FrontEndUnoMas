import React from 'react';
import { useEffect, useState, useRef } from "react";
import './../styles/destinations.css'



const Destinos =(props) => { 


    const [loading, setLoading] = useState(true);
    const imageRef = useRef();
    
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                if (loading) {
                    setLoading(false);
                }
            }, 500);
        }
    }, [loading, setLoading]);

    useEffect(() => {
    imageRef.current.src = loading ?
        "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" :
        // "imagenes/P1.jpg"
        "FotosArgentina/MapaArgentina.png"
   
        //  "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg";
        


    }, [loading, imageRef]);

    function apple(){
        alert('Hello world')
    }

    return (

        <section className='cont-dest'>
                  <div className='left'>
                  <div className='div-cont-dest'>
                      <p  className='box'>Argentina</p>
                       <ul>
                            <button onClick={apple} > Click me</button>
                    </ul>
       
                    
                    </div>
                  
                    </div>
                    <div className='rigth'>
                         <div className='div-cont-dest'>
                         <img ref={imageRef} alt="okay" width={500} />
                        
                   </div>
                </div>
        
        
            
    <div className="App">
      
    </div>
    </section>
    );
}

export default Destinos;
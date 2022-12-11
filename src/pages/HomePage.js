import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

// import styles from './../styles/home.css'



const HomePage =(props) => {


    const [isActive, setChangeColor] = useState(false);
  
    const handleClick = () => {
 
      setChangeColor(current => !current);
    }


    return( 
    <main>

<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100 imagen1" 
      src ="imagenes/p00001.jpg"
      alt="First slide"
    />
      <Carousel.Caption>
      <Button variant="outline-light" href='/novedades'>More Information</Button>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 imagen1"
      src="imagenes/p00005.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <Button variant="outline-light" href='/novedades'>More Information</Button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imagen1"
      src="imagenes/p00004.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <Button variant="outline-light" href='/novedades'>More Information</Button>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="texto-inicio">
                <div className=  "texto-nosotros"
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla, nemo at porro ducimus optio delectus eos perferendis magnam ullam voluptate quos sed commodi molestias sapiente aperiam a qui similique!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ipsam reiciendis corrupti voluptatibus quas sapiente cupiditate consequuntur ullam illo culpa in sint molestias natus quisquam, deserunt ad earum impedit. Odio.
                    </p>
                </div>
                <div className='texto-nosotros' >
                  <button onClick={handleClick} style={{
                  backgroundColor: isActive ? 'grey' : 'blue',
                  transform: isActive ? 'scale 2.4 ': ' ' }} > button</button>
              
               
               
             
            </div>
      </div>


     </main>
		
    );
}

export default HomePage;


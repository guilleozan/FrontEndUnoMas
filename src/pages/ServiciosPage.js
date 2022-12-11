import React from 'react';
import Card from "react-bootstrap/Card";

import Accordion from "react-bootstrap/Accordion";
import Dropdown from 'react-bootstrap/Dropdown'


const Servicios =(props) => {
    return( 
    
    <div className=''>
      <br></br>
      <br></br>
        <h2 className='boton'>Explora distintas actividades</h2> 
        <br></br>
     <div className="contenedor-actividad">


        <Card style={{ width: "18rem" }}>
          <Card.Img className='imagen' variant="top" src="imagenes/p00013.jpg" />
          <Card.Body>
            <Card.Title className="boton">Camping</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p className="btn btn-info"> <Accordion defaultActiveKey="required">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="infoCard">Mas informacion</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0"></Accordion.Item>
            </Accordion></p>
           
          </Card.Body>
        </Card>
       

     
        <Card style={{ width: "18rem" }}>
          <Card.Img className='imagen' variant="top" src="imagenes/p00008.jpg" />
          <Card.Body>
            <Card.Title className="boton">kayaking</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p className="btn btn-info"> <Accordion defaultActiveKey="required">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="infoCard">Mas informacion</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="1"></Accordion.Item> */}
            </Accordion></p>
           
          </Card.Body>
        </Card>
 

        <Card style={{ width: "18rem" }}>
          <Card.Img className='imagen' variant="top" src="imagenes/p00007.jpg" />
          <Card.Body>
            <Card.Title className="boton">treking</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button className="btn btn-info"> <Accordion defaultActiveKey="required">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="infoCard">Mas informacion</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"></Accordion.Item>
            </Accordion></button>
           
          </Card.Body>
        </Card>
     


        <Card style={{ width: "18rem" }}>
          <Card.Img className='imagen' variant="top" src="imagenes/p00006.jpg" />
          <Card.Body>
            <Card.Title className="boton">mountain biking</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button className="btn btn-info"> <Accordion defaultActiveKey="required">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="infoCard">Mas informacion</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"></Accordion.Item>
            </Accordion></button>
           
          </Card.Body>
        </Card>



        <Card style={{ width: "18rem" }}>
          <Card.Img className='imagen' variant="top" src="imagenes/parapent2.jpg" />
          <Card.Body>
            <Card.Title className="boton">Parapente</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p className="btn btn-info"> <Accordion defaultActiveKey="required">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="infoCard">Mas informacion</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0"></Accordion.Item>
            </Accordion></p>
           
          </Card.Body>
        </Card>


        <Card style={{ width: "18rem" }}>
          <Card.Img className='imagen' variant="top" src="imagenes/ice1.jpg" />
          <Card.Body>
            <Card.Title className="boton">Escalada sobre hielo</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p className="btn btn-info"> <Accordion defaultActiveKey="required">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="infoCard">Mas informacion</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0"></Accordion.Item>
            </Accordion></p>
           
          </Card.Body>
        </Card>
      </div>

      </div>



        

  
      
		
    );
}

export default Servicios;





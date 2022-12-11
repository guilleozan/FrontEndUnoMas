
import { useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import Spinner from 'react-bootstrap/Spinner';



const NovedadesPage =(props) => {
    const [loading, setLoading] = useState (false);
    const [ novedades, setNovedades] =useState([]);

    useEffect(() =>{
        const cargarNovedades = async () => {
            setLoading(true);
            //const response = await axios.get('${proces.env.REACT_APP_APPI_}/api/novedades');
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);




    return( 

 <main className="">
     
     
  
           
        {loading ?(
            <div className='spiner-whatsnew'>   <Spinner  animation="grow" role="status">
            <p className="font-spiner">Loading</p>
          </Spinner></div> 
            ) : (
                    novedades.map(item => < NovedadItem key= {item.id}
                    title ={item.titulo} subtitle ={item.subtitulo}
                    imagen= {item.imagen} body ={item.cuerpo} />)
                ) }
      
    </main>
		
    );
}

export default NovedadesPage;


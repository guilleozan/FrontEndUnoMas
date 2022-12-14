
import React, { useState } from "react";
import './../styles/destinations.css'


const data = [
  
    { id: 1,
      key:'1',
      title:'Argentina',
      text:' Hola soy argentina ',
      img :"FotosArg/argentina.png"
    },
    { id: 2,
      key:'2',
      title:'Salta',
      text:' hola soy la provincia de salta',
      text2:'mas informacion',
      img :"FotosArg/salta.png"
    },
    { id: 3,
      key:'3',
      title:'Cordoba',
      text:' hola soy la provincia de cordoba',
      text2:'mas informacion',
      img :"FotosArg/cordoba.png"
    },
    { id: 4,
    key:'4',
    title:'Buenos Aires',
    text:' hola soy la provincia de Buenos Aires',
    text2:'mas informacion',
    img :"FotosArg/bsas.png"
  },
  { id: 5, key:'5',title:'Catamarca', text:' hola soy la provincia de  Catamarca',
   text2:'mas informacion', img :"FotosArg/catamarca.png"
},
{ id: 6,
key:'6',
title:'Chaco',
text:' hola soy la provincia de Chaco',
text2:'mas informacion',
img :"FotosArg/chaco.png"
},
{ id: 7,
key:'7',
title:'Chubut',
text:' hola soy la provincia de Chubut',
text2:'mas informacion',
img :"FotosArg/chubut.png"
},
  ];
export default function DestinosPage() {
  const [toggle, setToggle] = useState("1");
  return (
    <div className="App">
      {data.map(({ title, text, key, img }) => {
        return (
          <>
            <div className="main">
              <div className="texto">
                <h1 className="dest-title"
                  onClick={() => {return setToggle(key);
                  }} 
                 >
                  {title}{" "}
                </h1>
                {toggle === key ? (
                  <>
                    <p>{text}</p>
                  </>
                ) : null}
              </div>

              <div className="img fotoArg">
                {toggle === key ? (
                  <>
                    <img src={img} key={key} className="photo" />
                  </>
                ) : null}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

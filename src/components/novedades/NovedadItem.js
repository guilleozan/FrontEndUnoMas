import React from 'react';


const NovedadItem = (props) => {
    const {title, subtitle ,imagen ,body } = props;

    return(
        <div className='novedades nth-child(even)(odd) '>
            <h2> {title} </h2>
            <h2>{subtitle} </h2>
            <img className='imagen' src={imagen}/>  
            <div dangerouslySetInnerHTML= {{ __html:body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;


// import { useState,useEffect } from "react";
// import axios from "axios";
// import NovedadItem from '/components/novedades/NovedadItem';
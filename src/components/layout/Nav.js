import '../../styles/nav.css'
import {Offcanvas} from 'bootstrap';
import React from 'react';
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Nav =(props) => {
    return( 
		
<div className='visible'>
        <nav className="contiene logo-nav-contiene">
			<nav className="botonera">
				<ul> 
					<li><NavLink activeClassName='activo' exact to= "/" > Home </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/destinos"> Destinations </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/servicios"> Whet we offer </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/galeria"> Galery </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/novedades"> News </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/contacto"> Contact </NavLink> </li>
				
				</ul>
			</nav>
			</nav>
			<div class='hidden'>		
			<button className="btn btn-dark btnNav" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
					<i className='bi bi-list xl'></i>
					
			</button>
				<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-dismiss="offcanvas"  data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
					<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasScrollingLabel">Menu</h5>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
						<div className="offcanvas-body">
							<ul className='offCanvUl'> 
								<li className='offCanvUlLi'><NavLink className='activo' exact to= "/"  > Home </NavLink> </li>
								<li className='offCanvUlLi'><NavLink className='activo' exact to= "/destinos"> Destinations </NavLink> </li>
								<li className='offCanvUlLi'><NavLink className='activo' exact to= "/servicios"> What we offer </NavLink> </li>
								<li className='offCanvUlLi'><NavLink className='activo' exact to= "/galeria"> Galery </NavLink> </li>
								<li className='offCanvUlLi'><NavLink className='activo' exact to= "/novedades"> News </NavLink> </li>
								<li className='offCanvUlLi'><NavLink className='activo' exact to= "/contacto"> Contact </NavLink> </li>
							</ul>
						</div>
				</div>
			</div>
</div>
    );
}

export default Nav;
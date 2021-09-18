import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Navbar=(props)=>{
	
	return (
	
	<>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/" style={{marginLeft:'10px'}}>{props.navtitle}</a> <a classNameName="nav-link" href="aboutus" style={{margin:'4px 140px 0px 0px', color:'white', textDecoration:'none'}}>About Us</a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight:'10px'}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
            
        </li>
        <li className="nav-item">
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="signup">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
  
   </>


	);
	
	
	}
	
	
	export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <div>
        <nav>
            <img class="logo" src="images/Calendly-Logo.jpeg"/>
            <ul class="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/individual">Individuals</Link></li>
                <li><Link to="/team">Teams</Link></li>                
                <li><Link to="/enterprice">Enterprise</Link></li> 
            </ul>
        </nav>
    </div>
  )
}

export default Navbars
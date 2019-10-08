import React from 'react'; 
import Register from './Register'
 
class Navbar extends React.Component {
    state = {  }
    render() { 
        return (
          <nav className="navbar navbar-default">
            <ul>
                <li><Register/></li>
            </ul>
          </nav>
        );
    }
}
 
export default Navbar;
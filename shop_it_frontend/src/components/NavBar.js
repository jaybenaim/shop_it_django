import React from 'react'; 

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (
          <nav>
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
            </ul>
          </nav>
        );
    }
}
 
export default Navbar;
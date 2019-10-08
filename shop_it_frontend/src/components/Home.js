import React from 'react'; 
import Navbar from './NavBar' 

class Home extends React.Component {
    state = {  }
    render() { 
        return (
          <>
            <div className="container">
              <Navbar />
              <h1>Welcome To Shop It</h1>
            </div>
          </>
        );
    }
}
 
export default Home;
import React from 'react'; 
import Navbar from './NavBar' 

class Home extends React.Component {
    state = {  }
    render() { 
        return ( <> 
        <Navbar /> 
        <h1>Welcome To Shop It</h1>
        </> );
    }
}
 
export default Home;
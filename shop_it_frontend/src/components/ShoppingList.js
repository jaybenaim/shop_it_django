import React, { Component } from 'react';
import Api from '../apis/api'
import axios from 'axios' 

class ShoppingList extends Component {
    state = { 
        shoppingList: []
     }

    getUserShoppingList = () => { 
        
        Api.get("stores/").then(res => {
          this.setState({
            shoppingList: [...this.state.shoppingList, res.data]
          });
        });
    }
    componentDidMount() { 
        this.getUserShoppingList(); 
    }
    render() { 
   console.log(localStorage.token)

        return (
             <>
                <div> 

                </div>
                <button>Click to add a shopping list</button>
            </> 
          );
    }
}
 
export default ShoppingList;
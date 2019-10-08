import React, { Component } from 'react';

class ShoppingListItems extends Component {
    state = {  }
    render() { 
        return (
          <div>
            <table>
              <tr>
                <th>Item Price</th>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Item Ingrediants</th>
              </tr>
              <tr>
                <td>Item Price</td>
                <td>Item Name</td>
                <td>Item Description</td>
                <td>Item Ingrediants</td>
              </tr>
            </table>
          </div>
        );
    }
}
 
export default ShoppingListItems;
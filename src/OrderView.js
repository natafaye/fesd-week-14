import React, { Component } from 'react'

export default class OrderView extends Component {
  render() {
    return (
      <div>
        <h2>You are Ordering:</h2>
        <ul>
            {this.props.orderList.map(order => 
                <li key={order.id}>
                    { order.id + " " + order.type }
                    <button className="btn btn-danger ms-3" onClick={() => this.props.removeOrder(order.id)}>Delete</button>
                    <button className="btn btn-success ms-3" onClick={() => this.props.updateOrder(order.id, "guacamole")}>Set to Guacamole</button>
                </li>
            )}
        </ul>
      </div>
    )
  }
}

// props = {
//     orderThing: "none"
// }





// You could imagine it this way
// class Component {
//     constructor(props) {
//         this.props = props;
//     }
// }
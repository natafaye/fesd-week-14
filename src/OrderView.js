import React, { Component } from 'react'

export default class OrderView extends Component {

    render() {
        return (
            <div>
                <h2>You Ordered:</h2>
                <ul> 
                    {this.props.orderList.map(order => 
                        <li>
                            {order.id + " " + order.type}
                            <button className="btn btn-danger ms-3" onClick={() => this.props.removeOrder(order.id)}>Delete</button>
                            <button className="btn btn-warning ms-3" onClick={() => this.props.addCheese(order.id)}>Add Cheese</button>
                        </li>
                    )} 
                </ul>
            </div>
        )
    }
}

// props = {
//     order: "none"
// }

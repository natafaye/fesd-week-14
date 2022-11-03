import React, { Component } from 'react'

export default class OrderView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h3>Your Order:</h3>
                <p>{this.props.size} - {this.props.customerOrder}</p>
            </div>
        )
    }
}

// this.props = {
//     customerOrder: "tacos",
//     size: 5
// }

import React, { Component } from 'react'

export default class OrderMenu extends Component {

    onOrderTacoClick = () => {
        // change the state in app to taco

        // DON'T DO THIS:
        //this.setState({ order: "tacos" })

        this.props.setOrder("tacos")
    }

    render() {
        //console.log(this.props.addTopping)
        return (
            <div>
                <h3>Make Your Order</h3>
                <button className="btn btn-primary me-2" onClick={this.onOrderTacoClick}>Order Tacos</button>
                <button className="btn btn-primary me-2" onClick={() => this.props.setOrder("burritos")}>Order Burritos</button>
                <button className="btn btn-primary me-2" onClick={() => this.props.setOrder("fajitas")}>Order Fajitas</button>
                <button className="btn btn-warning me-2" onClick={() => this.props.addTopping("cheese")}>Add Cheese</button>
            </div>
        )
    }
}

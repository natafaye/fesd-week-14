import React, { Component } from 'react'
import OrderMenu from './OrderMenu'
import OrderView from './OrderView'

// If it's never going to change, it doesn't need to be in state
//const TOPPINGS = ["cheese", "pickles"]

export default class App extends Component {
    constructor(props) {
        super(props) // call the Component constructor so that the props get put in this.props (and other things)

        // If it is going to change, it needs to be in state in ONE place.
        // Set up some state and give it an intitial value
        this.state = {
            order: "none",
            size: 0
        }
    }

    setOrder = (newOrder) => {
        // DON'T DO THIS:
        // this.state.order = "tacos"

        this.setState({ order: newOrder })
    }

    addTopping = (toppping) => {
        this.setState({ order: this.state.order + " with " + toppping})
    }

    render() {

        return (
            <div>
                <OrderView customerOrder={this.state.order} size={this.state.size}/>
                <OrderMenu setOrder={this.setOrder} addTopping={this.addTopping}/>
            </div>
        )
    }
}



// This is not exactly correct
// class Component {
//     constructor(props) {
//         this.props = props;
//     }
// }




// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
// }

// class Cat extends Animal {
//     constructor(name, type) {
//         super(type)
//         this.name = name;
//     }
// }


// props = {
//     customerOrder: "tacos",
//     size: 5
// }




// function myReactApp() {
//     let state = "something"
//     anothercomponent(state)
// }

// function anothercomponent(props) { //props = "something"
//     console.log(props);
// }
import React, { Component } from 'react'
import OrderMenu from './OrderMenu'
import OrderView from './OrderView'

export default class App extends Component {
    constructor(props) {
        // make sure React can set up props and such
        super(props);
        
        // Set up and give initial values to any state that we want
        this.state = {
            orderList: [
                {
                    id: 0,
                    type: "banana"
                }
            ]
        }
    }

    setOrder = (newOrderType) => {
        // BAD
        // this.state.order = newOrder

        // GOOD
        //this.setState({ order: newOrder })

        // BAD
        //this.state.orderList.push(newOrder)

        // GOOD BUT CLUNKY
        // const copyOfArray = this.state.orderList.slice()
        // copyOfArray.push(newOrder);
        // this.setState({ orderList: copyOfArray })

        // Make it an object
        const newOrderItem = {
            id: this.state.orderList[this.state.orderList.length - 1].id + 1, // hack
            type: newOrderType
        }

        // GOOD STREAMLINED WAY
        this.setState({ orderList: this.state.orderList.concat(newOrderItem) })
    }

    removeOrder = (idToDelete) => {
        // GOOD STREAMLINED WAY
        this.setState({ orderList: this.state.orderList.filter(order => order.id !== idToDelete) })
    }

    updateOrder = (idToUpdate, newType) => {
        const itemToUpdate = this.state.orderList.find(order => order.id === idToUpdate);
        const index = this.state.orderList.indexOf(itemToUpdate);

        // BAD
        // itemToUpdate.type = newType;

        // CLUNKY
        // const copyOfItem = { ...itemToUpdate }
        // copyOfItem.type = newType;

        // STREAMLINED
        const copyOfItem = { ...itemToUpdate, type: newType }

        // BAD
        // this.state.orderList[index] = copyOfItem

        const copyOfArray = this.state.orderList.slice()
        copyOfArray[index] = copyOfItem;

        this.setState({ orderList: copyOfArray })
    }

    render() {
        return (
            <div>
                <OrderMenu setOrder={this.setOrder}/>
                <OrderView orderList={this.state.orderList} removeOrder={this.removeOrder} updateOrder={this.updateOrder} />
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

//     setState = (newState) => {
//         // update the state
//     }
// }
import React, { Component } from 'react'
import Menu from './Menu'
import OrderView from './OrderView'

export default class App extends Component {
    constructor(props) {
        super(props)

        // Set up and given our state an initial value
        this.state = {
            orderList: [
                {
                    id: 0,
                    type: "burrito"
                }
            ]
        }
    }

    addOrder = (newOrder) => {
        // BAD
        //this.state.orderState = "banana"

        // BAD
        // this.state.orderList.push(newOrder)

        // const updatedCopy = this.state.orderList.slice()
        // updatedCopy.push(newOrder)

        // Make an object instead
        const orderItem = {
            id: this.state.orderList[this.state.orderList.length - 1].id + 1, // hack
            type: newOrder
        }

        // GOOD
        this.setState({ orderList: this.state.orderList.concat(orderItem) })
    }

    removeOrder = (idToDelete) => {
        this.setState({ orderList: this.state.orderList.filter(order => order.id !== idToDelete) })
    }

    addCheese = (idToUpdate) => {
        const orderToUpdate = this.state.orderList.find(order => order.id === idToUpdate)
        const index = this.state.orderList.indexOf(orderToUpdate);

        // BAD
        //orderToUpdate.type += " with cheese"

        // GOOD
        const copyOfOrder = { ...orderToUpdate }
        copyOfOrder.type += " with cheese"

        // BAD
        //this.state.orderList[index] = copyOfOrder

        const copyOfOrderList = this.state.orderList.slice()
        copyOfOrderList[index] = copyOfOrder;

        this.setState({ orderList: copyOfOrderList })

        // Fancy kind of complex way
        // this.setState({ orderList: this.state.orderList.map(order => {
        //     if(order.id === idToUpdate) {
        //         const copyOfOrder = { ...orderToUpdate }
        //         copyOfOrder.type += " with cheese"
        //         return copyOfOrder
        //     }
        //     return order;
        // })})

        // VERY FANCY HANDLE WITH CARE
        // this.setState({ 
        //     orderList: this.state.orderList.map(
        //         order => (order.id === idToUpdate) ? { ...orderToUpdate, type: order.type + " with cheese" } : order 
        //     ) 
        // })
    }

    render() {
        return (
            <div>
                { this.state.order }
                { this.props.something }
                <Menu addOrder={this.addOrder} />
                <OrderView orderList={this.state.orderList} removeOrder={this.removeOrder} addCheese={this.addCheese}/>
            </div>
        )
    }
}


// You can imagine the Component class like this
// class Component {
//     constructor(props) {
//         this.props = props;
//     }
//
//     setState(newState) {
//         // update state
//     }
// }

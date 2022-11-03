import React, { Component } from 'react'
import AddDishForm from './AddDishForm';
import MenuList from './MenuList';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishesList: [ { id: 0, name: "Tacos", price: 2 }, { id: 1, name: "Burrito", price: 5 } ]
        }
    }

    deleteDish = (idToDelete) => {
        // BAD: don't update state directly!
        //const indexToDelete = this.state.dishesList.findIndex(dish => dish.id === idToDelete)
        //this.state.dishesList.splice(indexToDelete, 1)

        // GOOD: make a copy, make the change to the copy, set the state to the changed copy
        //const indexToDelete = this.state.dishesList.findIndex(dish => dish.id === idToDelete)
        // const copyOfDishesList = this.state.dishesList.slice()
        // copyOfDishesList.splice(indexToDelete, 1)
        // this.setState({ dishesList: copyOfDishesList })

        // GREAT: use an array method that naturally makes a copy
        this.setState({ dishesList: this.state.dishesList.filter(dish => dish.id !== idToDelete ) })
    }

    createDish = (newDishName, newDishPrice) => {
        const newDish = {
            id: this.state.dishesList[this.state.dishesList.length - 1].id + 1, // not a perfect hack
            name: newDishName,
            price: newDishPrice
        }

        // BAD: don't update state directly!
        // this.state.dishesList.push(newDish);

        // GOOD: make a copy, make the change to the copy, set the state to the changed copy
        // const copyOfDishesList = this.state.dishesList.slice()
        // copyOfDishesList.push(newDish);
        // this.setState({ dishesList: copyOfDishesList })

        // GREAT: use an array method that naturally makes a copy
        this.setState({ dishesList: this.state.dishesList.concat(newDish) })
    }

    render() {
        return (
            <div>
                <AddDishForm onSubmit={this.createDish}/>
                <MenuList dishesList={this.state.dishesList} onDelete={this.deleteDish}/>
            </div>
        )
    }
}

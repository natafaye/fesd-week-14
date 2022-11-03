import React, { Component } from 'react'

export default class AddDishForm extends Component {
    constructor(props) {
        super(props);

        // In progress form data
        this.state = {
            nameValue: "", // keeps track of what is in the textbox
            priceValue: 0
        }
    }

    // Change event handlers
    onNameChange = (event) => this.setState({ nameValue: event.target.value })
    onPriceChange = (event) => this.setState({ priceValue: event.target.value })

    // Submit event handler
    submitForm = (event) => {
        event.preventDefault() // prevents the page from refreshing

        // Send the form data to the App component to be saved
        this.props.onSubmit(this.state.nameValue, this.state.priceValue)

        // Clear the form
        this.setState({ nameValue: "", priceValue: 0 })
    }

    render() {
        return (
            <form>
                <label>Name:</label>
                <input type="text" value={this.state.nameValue} onChange={this.onNameChange} />

                <label>Price:</label>
                <input type="text" value={this.state.priceValue} onChange={this.onPriceChange} />
                
                <button className="btn btn-success" onClick={this.submitForm}>Create</button>
            </form>
        )
    }
}

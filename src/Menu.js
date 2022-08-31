import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeValue: ""
        }
    }

    handleTypeChange = (event) => {
        // Sets our piece of state to whatever is currently in the textbox
        this.setState({ typeValue: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addOrder(this.state.typeValue)
    }

    render() {
        return (
            <div>
                <form>
                    What do you want?
                    <input type="text" value={this.state.typeValue} onChange={this.handleTypeChange}/>
                    <button className="btn btn-primary" onClick={this.onSubmit}>Order</button>
                </form>
                {/* <button className="btn btn-primary me-3" onClick={() => this.props.addOrder("tacos")}>Tacos</button>
                <button className="btn btn-primary me-3" onClick={() => this.props.addOrder("burritos")}>Burritos</button> */}
            </div>
        )
    }
}

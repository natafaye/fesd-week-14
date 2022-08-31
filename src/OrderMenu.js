import React, { Component } from 'react'

export default class OrderMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            typeValue: ""
        }
    }

    handleTypeChange = (event) => {
        this.setState({ typeValue: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.setOrder(this.state.typeValue)

        this.setState({ typeValue: "" })
    }

    render() {
        return (
            <form>
                What does your heart desire?
                <input type="text" value={this.state.typeValue} onChange={this.handleTypeChange}/>
                <button className="btn btn-primary" onClick={this.onSubmit}>Order</button>
                {/* <button className="btn btn-primary" onClick={() => this.props.setOrder("taco")}>Taco</button>
                <button className="btn btn-primary" onClick={() => this.props.setOrder("BURRITO")}>BURRITO</button> */}
            </form>
        )
    }
}

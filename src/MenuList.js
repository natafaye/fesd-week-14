import React, { Component } from 'react'

export default class MenuList extends Component {
  render() {
    return (
      <ul className="list-group">
        { this.props.dishesList.map(dish => (
            <li className="list-group-item" key={ dish.id }>
                <button className="btn btn-danger me-2" onClick={() => this.props.onDelete(dish.id)}>Delete</button>
                { dish.name } - { dish.price }
            </li>
        ))}
      </ul>
    )
  }
}

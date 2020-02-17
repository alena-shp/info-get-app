import React from "react"
import "./itemList.scss"

export default class ItemList extends React.Component {
  render() {
    return (
      <ul className="itemList">
        <li className="itemList__item">
          <a href="#0">Luke Skywalker</a>
        </li>
        <li className="itemList__item">
          <a href="#0">Darth Vader</a>
        </li>
        <li className="itemList__item">
          <a href="#0">R2-D2</a>
        </li>
      </ul>
    )
  }
}

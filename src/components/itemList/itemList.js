import React from "react"
import "./itemList.scss"

const ItemList = props => {
  ItemList.defaultProps = {
    onItemselected: () => {}
  }
  const { data, onItemselected, children: renderlabel } = props

  const items = data.map(item => {
    const { id } = item
    const label = renderlabel ? renderlabel(item) : ""
    return (
      <li
        key={id}
        className="itemList__item"
        onClick={() => onItemselected(id)}
      >
        <a href="#0">{label}</a>
      </li>
    )
  })

  return <ul className="itemList">{items}</ul>
}

export default ItemList

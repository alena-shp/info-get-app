import React from "react"
import "./itemList.scss"

import PropTypes from "prop-types"

const ItemList = props => {
  const { data, onItemselected, children: renderlabel } = props

  ItemList.defaultProps = {
    onItemselected: () => {}
  }

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

ItemList.propTypes = {
  data: PropTypes.array.isRequired,
  onItemselected: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
}

import React from "react"
import "./itemList.scss"
import swapiService from "../../services/swapiService"
import Spinner from "../spinner"

export default class ItemList extends React.Component {
  swapiData = new swapiService()
  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props
    getData().then(itemList => {
      this.setState({ itemList })
    })
  }

  renderItems(arr) {
    return arr.map(elem => {
      const { id } = elem
      const label = this.props.children ? this.props.children(elem) : ""
      return (
        <li
          key={id}
          className="itemList__item"
          onClick={() => this.props.onItemselected(id)}
        >
          <a href="#0">{label}</a>
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state

    if (!itemList) {
      return <Spinner />
    }

    const items = this.renderItems(itemList)

    return <ul className="itemList">{items}</ul>
  }
}

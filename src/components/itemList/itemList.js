import React from "react"
import "./itemList.scss"
import swapiService from "../../services/swapiService"
import Spinner from "../spinner"

const ItemList = props => {
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

const withData = View => {
  return class extends React.Component {
    swapiData = new swapiService()
    state = {
      data: null
    }

    componentDidMount() {
      const { getData } = this.props
      getData().then(data => {
        this.setState({ data })
      })
    }
    render() {
      const { data } = this.state

      if (!data) {
        return <Spinner />
      }
      return <ItemList {...this.props} data={this.state.data} />
    }
  }
}

export default withData(ItemList)

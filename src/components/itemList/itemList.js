import React from "react"
import "./itemList.scss"
import swapiService from "../../services/swapiService"
import Spinner from "../spinner"

export default class ItemList extends React.Component {
  swapiData = new swapiService()
  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiData.getAllPeople().then(peopleList => {
      this.setState({ peopleList })
      console.log(peopleList)
    })
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li key={id} className="itemList__item"
        onClick={()=> this.props.onItemselected(id)}>
          <a href="#0">{name}</a>
        </li>
      )
    })
  }

  render() {
    const { peopleList } = this.state

    if (!peopleList) {
      return <Spinner />
    }

    const items = this.renderItems(peopleList)

    return <ul className="itemList">{items}</ul>
  }
}

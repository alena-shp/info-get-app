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
  render() {
    const { peopleList } = this.state

    if (peopleList === null) {
      return <Spinner />
    }

    const people = peopleList.map(person => {
      const { id, name } = person
      return (
        <li key={id} className="itemList__item">
          <a href="#0">{name}</a>
        </li>
      )
    })
    return <ul className="itemList">{people}</ul>
  }
}

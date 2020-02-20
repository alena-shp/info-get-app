import React from "react"
import "./personPage.scss"
import ItemList from "../itemList"
import PersonDetails from "../personDetails/personDetails"
import swapiService from "../../services/swapiService"

export default class PersonPage extends React.Component {
  swapiData = new swapiService()
  state = {
    personId: ""
  }

  onItemselected = id => {
    this.setState({
      personId: id
    })
  }

  render() {
    const { personId } = this.state
    return (
      <div className="person-page">
        <div className="person-page__items">
          <ItemList
            onItemselected={this.onItemselected}
            getData={this.swapiData.getAllPeople}
            renderLabel={elem => `${elem.name} ${elem.mass} ${elem.gender}`}
          />
        </div>
        <div className="person-page__details">
          <PersonDetails personId={personId} />
        </div>
      </div>
    )
  }
}

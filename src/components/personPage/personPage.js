import React from "react"
import "./personPage.scss"
import ItemList from "../itemList"
import PersonDetails from "../personDetails/personDetails"
import swapiService from "../../services/swapiService"

export default class PersonPage extends React.Component {
  swapiData = new swapiService ()
  state = {
    personId: 5
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
        <ItemList onItemselected={this.onItemselected} 
        getData={this.swapiData.getAllPeople}/>
        <PersonDetails personId={personId} />
      </div>
    )
  }
}

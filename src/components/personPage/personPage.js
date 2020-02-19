import React from "react"
import "./personPage.scss"
import ItemList from "../itemList"
import PersonDetails from "../personDetails/personDetails"

export default class PersonPage extends React.Component {
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
        <ItemList onItemselected={this.onItemselected} />
        <PersonDetails personId={personId} />
      </div>
    )
  }
}

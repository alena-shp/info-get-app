import React from "react"
import "./personPage.scss"
import ItemList from "../itemList"
import PersonDetails from "../personDetails/personDetails"
import swapiService from "../../services/swapiService"
import Row from "../app/row/row"
import ErrorBoundary from "../errorBoundary/errorBoundary"

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

    const itemList = (
      <ItemList
        onItemselected={this.onItemselected}
        getData={this.swapiData.getAllPeople}
      >
        {e => `${e.name} (${e.birthYear})`}
      </ItemList>
    )

    const personDetails = <PersonDetails personId={personId} />

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    )
  }
}

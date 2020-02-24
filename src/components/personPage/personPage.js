import React from "react"
import "./personPage.scss"
import ItemList from "../itemList"
import ItemDetails, { Record } from "../itemDetails/itemDetails"
import swapiService from "../../services/swapiService"
import Row from "./../row/row"
import ErrorBoundary from "../errorBoundary/errorBoundary"

export default class PersonPage extends React.Component {
  swapiData = new swapiService()
  state = {
    itemId: ""
  }

  onItemselected = id => {
    this.setState({
      itemId: id
    })
  }

  render() {
    const { itemId } = this.state

    const itemList = (
      <ItemList
        onItemselected={this.onItemselected}
        getData={this.swapiData.getAllPeople}
      >
        {e => `${e.name}`}
      </ItemList>
    )

    const itemDetails = (
      <ItemDetails
        itemId={itemId}
        getDetails={this.swapiData.getPerson}
        getImageUrl={this.swapiData.getImagePeople}
      >
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="hairColor" label="Hair Color" />
        <Record field="height" label="Height" />
        <Record field="mass" label="Mass" />
        <Record field="skinColor" label="Skin Color" />
      </ItemDetails>
    )

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundary>
    )
  }
}

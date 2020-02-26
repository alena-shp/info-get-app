import React from "react"
import Row from "../row/row"
import { PlanetDetails, PlanetsItemList } from "../wrapper-component"

export default class PagePlanets extends React.Component {
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

    return (
      <Row
        left={<PlanetsItemList onItemselected={this.onItemselected} />}
        right={<PlanetDetails itemId={itemId} />}
      />
    )
  }
}

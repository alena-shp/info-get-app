import React from "react"
import Row from "../row/row"
import { StarshipDetails, StarshipsItemList } from "../wrapper-component"

export default class PageStarships extends React.Component {
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
        left={<StarshipsItemList onItemselected={this.onItemselected} />}
        right={<StarshipDetails itemId={itemId} />}
      />
    )
  }
}

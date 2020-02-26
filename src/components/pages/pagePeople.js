import React from "react"
import Row from "./../row/row"
import { PeopleItemList, PersonDetails } from "../wrapper-component"

export default class PagePeople extends React.Component {
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
        left={<PeopleItemList onItemselected={this.onItemselected} />}
        right={<PersonDetails itemId={itemId} />}
      />
    )
  }
}

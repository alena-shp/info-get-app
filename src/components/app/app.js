import React from "react"
import "./app.scss"
import Header from "../header/header"
import ItemList from "../itemList"
import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonDetails from "../personDetails/personDetails"

class App extends React.Component {
  state = {
    
    numSelect: 5
  }

  onItemselected = id => {
    this.setState({
      numSelect: id
    })
  }
  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <div className="app__description">
          <ItemList onItemselected={this.onItemselected} />
          <PersonDetails numSelect={this.state.numSelect}/>
        </div>
      </div>
    )
  }
}
export default App

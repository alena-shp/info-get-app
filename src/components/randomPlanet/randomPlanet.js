import React from "react"
import "./randomPlanet.scss"
import swapiService from "./../../services/swapiService"

export default class RandomPlanet extends React.Component {
  swapiData = new swapiService()

  state = {
    planet: {}
  }

  constructor() {
    super()
    this.updataPlanets()
  }

  onPlanetLoaded = planet => {
    return this.setState({ planet })
  }

  updataPlanets() {
    const id = Math.floor(Math.random() * 18) + 1
    this.swapiData.getPlanet(id).then(this.onPlanetLoaded)
  }

  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter }
    } = this.state
    return (
      <div className="randomPlanet">
        <img
          className="randomPlanet__img"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
        />

        <div className="randomPlanet__card card">
          <h3 className="card__name">{name}</h3>
          <ul className="card__description">
            <li className="card__description-item">
              <span>Population</span>
              <span>{population}</span>
            </li>
            <li className="card__description-item">
              <span>RotationPeriod</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="card__description-item">
              <span>Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

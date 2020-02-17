import React from "react"
import "./randomPlanet.scss"
import swapiService from "./../../services/swapiService"

export default class RandomPlanet extends React.Component {
  swapiData = new swapiService()

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }

  constructor() {
    super()
    this.updataPlanets()
  }

  updataPlanets() {
    const id = Math.floor(Math.random() * 18) + 1
    this.swapiData.getPlanet(id).then(planet => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    })
    console.log(id)
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state
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

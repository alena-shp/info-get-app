import React from "react"
import "./randomPlanet.scss"
import swapiService from "./../../services/swapiService"
import Spinner from "../spinner"
import ErrorIndicator from "../errorIndicator"

export default class RandomPlanet extends React.Component {
  swapiData = new swapiService()

  state = {
    planet: {},
    loading: true,
    err: false
  }

  componentDidMount() {
    this.updataPlanets()
    this.interval = setInterval(this.updataPlanets, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = planet => {
    return this.setState({ planet, loading: false })
  }

  onError = err => {
    this.setState({ err: true, loading: false })
  }

  updataPlanets = () => {
    const id = Math.floor(Math.random() * 17) + 2
    this.swapiData
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, err } = this.state

    const hasData = !loading && !err
    const spinner = loading ? <Spinner /> : null
    const errorMessage = err ? <ErrorIndicator /> : null
    const content = hasData ? <PlanetView planet={planet} /> : null

    return (
      <div className="randomPlanet">
        {spinner}
        {content}
        {errorMessage}
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet
  return (
    <>
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
    </>
  )
}

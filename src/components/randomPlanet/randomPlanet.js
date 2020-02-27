import React from "react"
import "./randomPlanet.scss"
import PropTypes from "prop-types"

import swapiService from "./../../services/swapiService"
import Spinner from "../spinner"
import ErrorIndicator from "../errorIndicator"

export default class RandomPlanet extends React.Component {
  static defaultProps = {
    upDataUnterval: 10000
  }

  swapiData = new swapiService()

  state = {
    planet: {},
    loading: true,
    err: false
  }

  componentDidMount() {
    const { upDataUnterval } = this.props
    this.updataPlanets()
    this.interval = setInterval(this.updataPlanets, upDataUnterval)
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

RandomPlanet.propTypes = {
  upDataUnterval: PropTypes.number,
  loading: PropTypes.bool,
  err: PropTypes.bool
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

PlanetView.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    rotationPeriod: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired
  })
}

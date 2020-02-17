import React from "react"
import "./randomPlanet.scss"

export default class RandomPlanet extends React.Component {
  render() {
    return (
      <div className="randomPlanet">
        <img
          className="randomPlanet__img"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
          alt=""
        />
        <div className="randomPlanet__card card">
          <h3 className="card__title">Planet Name</h3>
          <ul className="card__description">
            <li className="card__description-item">
              <span>Population</span>
              <span>123124</span>
            </li>
            <li className="card__description-item">
              <span>Rotation Perio</span>
              <span>43</span>
            </li>
            <li className="card__description-item">
              <span>Diameter</span>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

import React from "react"
import "./personDetails.scss"

export default class PersonDetails extends React.Component {
  render() {
    return (
      <div className="personDetails">
        <img
          className="personDetails__img"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
          alt=""
        />
        <div className="personDetails__card card">
          <h3 className="card__name">R2-D2</h3>
          <ul className="card__description">
            <li className="card__description-item">
              <span>Gender</span>
              <span>male</span>
            </li>
            <li className="card__description-item">
              <span>Birth Yea</span>
              <span>43</span>
            </li>
            <li className="card__description-item">
              <span>Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

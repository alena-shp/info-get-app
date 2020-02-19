import React from "react"
import "./personDetails.scss"
import swapiService from "../../services/swapiService"
import Spinner from "../spinner"

export default class PersonDetails extends React.Component {
  swapiData = new swapiService()

  state = {
    person: {},
    loading: true
  }

  componentDidMount() {
    this.updataPerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updataPerson()
      this.setState({ loading: true })
    }
  }

  updataPerson() {
    const { personId } = this.props

    if (!personId) {
      return
    }

    this.swapiData.getPerson(personId).then(person => {
      this.setState({ person, loading: false })
    })
  }

  render() {
    const { person, loading } = this.state

    const spinner = loading ? <Spinner /> : null
    const content = !loading ? <ViewPerson person={person} /> : null

    return (
      <div className="personDetails">
        {spinner}
        {content}
      </div>
    )
  }
}

const ViewPerson = ({ person }) => {
  const {
    id,
    name,
    gender,
    birthYear,
    eyeColor,
    hairColor,
    height,
    mass,
    skinColor
  } = person
  return (
    <>
      <img
        className="personDetails__img"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt=""
      />
      <div className="personDetails__card card">
        <h3 className="card__name">{name}</h3>
        <ul className="card__description">
          <li className="card__description-item">
            <span>Gender</span>
            <span>{gender}</span>
          </li>
          <li className="card__description-item">
            <span>Birth Yea</span>
            <span>{birthYear}</span>
          </li>
          <li className="card__description-item">
            <span>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
          <li className="card__description-item">
            <span>Hair Color</span>
            <span>{hairColor}</span>
          </li>
          <li className="card__description-item">
            <span>Height</span>
            <span>{height}</span>
          </li>
          <li className="card__description-item">
            <span>Mass</span>
            <span>{mass}</span>
          </li>
          <li className="card__description-item">
            <span>Skin Color</span>
            <span>{skinColor}</span>
          </li>
        </ul>
      </div>
    </>
  )
}

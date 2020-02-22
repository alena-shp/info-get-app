import React from "react"
import "./itemDetails.scss"
import swapiService from "../../services/swapiService"
import Spinner from "../spinner"

export default class ItemDetails extends React.Component {
  swapiData = new swapiService()

  state = {
    item: "",
    loading: true,
    image: ""
  }

  componentDidMount() {
    this.updataItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updataItem()
      this.setState({ loading: true })
    }
  }

  updataItem() {
    const { itemId, getDetails, getImageUrl } = this.props

    if (!itemId) {
      return
    }
    getDetails(itemId).then(item => {
      this.setState({ item, loading: false, image: getImageUrl(item) })
    })
  }

  render() {
    const { item, loading, image } = this.state

    const {
      name,
      gender,
      birthYear,
      eyeColor,
      hairColor,
      height,
      mass,
      skinColor
    } = item

    if (item === "") {
      return <span>Select a person from a list</span>
    }

    const viewItem = (
      <>
        <img className="personDetails__img" src={image} alt="" />
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
    const spinner = loading ? <Spinner /> : null
    const content = !loading ? viewItem : null

    return (
      <div className="personDetails">
        {spinner}
        {content}
      </div>
    )
  }
}

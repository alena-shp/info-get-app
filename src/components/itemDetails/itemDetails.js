import React from "react"
import "./itemDetails.scss"
import swapiService from "../../services/swapiService"
import Spinner from "../spinner"

const Record = ({ item, field, label }) => {
  return (
    <li className="card__description-item">
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}
export { Record }

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

    const { name } = item

    if (item === "") {
      return <span>Select a person from a list</span>
    }

    if (loading) {
      return <Spinner />
    }

    return (
      <div className="personDetails">
        <img className="personDetails__img" src={image} alt="" />
        <div className="personDetails__card card">
          <h3 className="card__name">{name}</h3>
          <ul className="card__description">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item })
            })}
          </ul>
        </div>
      </div>
    )
  }
}

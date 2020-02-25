import React from "react"
import "./itemDetails.scss"
import Spinner from "../spinner"
import WithDataDetails from "../hocComponent/withDataDetails"

const ItemDetails = props => {
  const { item, loading, image } = props

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
          {React.Children.map(props.children, child => {
            return React.cloneElement(child, { item })
          })}
        </ul>
      </div>
    </div>
  )
}

export default WithDataDetails(ItemDetails)

import React from "react"
import "./itemDetails.scss"

// const Record = ({ item, field, label }) => {
//   return (
//     <li className="card__description-item">
//       <span>{label}</span>
//       <span>{item[field]}</span>
//     </li>
//   )
// }
// export { Record }

const ItemDetails = props => {
  const { item, image } = props

  const { name } = item

  if (item === "") {
    return <span>Select a person from a list</span>
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

export default ItemDetails

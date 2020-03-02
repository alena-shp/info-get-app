import React from "react"
import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__text">
        STAR DB
      </Link>
      <ul className="header__menu">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </ul>
    </div>
  )
}
export default Header

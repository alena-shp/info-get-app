import React from "react"
import { SwapiConsumer } from "./../swapiContext/swapiContext"

const WithContext = (Wrapped, mapMethodToProps) => {
  return props => {
    return (
      <SwapiConsumer>
        {swapiData => {
          const mapFunction = mapMethodToProps(swapiData)
          return <Wrapped {...props} {...mapFunction} />
        }}
      </SwapiConsumer>
    )
  }
}
export default WithContext

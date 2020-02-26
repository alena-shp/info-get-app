import React from "react"

const WithChild = (Wrapper, fn) => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>
  }
}

export default WithChild
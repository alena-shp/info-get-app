import React from "react"
import ErrorIndicator from "../errorIndicator"

export default class ErrorBoundary extends React.Component {
  state = {
    errorHas: false
  }
  componentDidCatch() {
    this.setState({
      errorHas: true
    })
  }

  render() {
    const { errorHas } = this.state
    if (errorHas) {
      return <ErrorIndicator />
    }
    return this.props.children
  }
}

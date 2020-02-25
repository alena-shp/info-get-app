import React from "react"
import Spinner from "../spinner"

const WithDataList = View => {
  return class extends React.Component {
    state = {
      data: null
    }

    componentDidMount() {
      const { getData } = this.props
      getData().then(data => {
        this.setState({ data })
      })
    }
    render() {
      const { data } = this.state

      if (!data) {
        return <Spinner />
      }
      return <View {...this.props} data={data} />
    }
  }
}

export default WithDataList

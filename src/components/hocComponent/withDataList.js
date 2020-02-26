import React from "react"
import Spinner from "../spinner"
import ErrorIndicator from "../errorIndicator"

const WithDataList = View => {
  return class extends React.Component {
    state = {
      data: null,
      isloading: true,
      err: false
    }

    componentDidMount() {
      const { getData } = this.props
      getData()
        .then(data => {
          this.setState({ data, isloading: false })
        })
        .catch(this.onError)
    }

    onError = err => {
      this.setState({ err: true, isloading: false })
    }

    render() {
      const { data, isloading, err } = this.state

      if (isloading) {
        return <Spinner />
      }

      if (err) {
        return <ErrorIndicator />
      }

      return <View {...this.props} data={data} />
    }
  }
}

export default WithDataList

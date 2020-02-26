import React from "react"
import Spinner from "../spinner"
import ErrorIndicator from "../errorIndicator"


const WithDataList = View => {
  return class extends React.Component {
    state = {
      data: null,
      isLoading: true,
      err: false
    }

    componentDidMount() {
      const { getData } = this.props
      getData().then(data => {
        this.setState({ data,  isLoading: false})
      })
      .catch(this.onError)
    }

    onError = err => {
      this.setState({ err: true, isloading: false })
    }

    render() {
      const { data, isLoading, err } = this.state

      if (isLoading) {
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

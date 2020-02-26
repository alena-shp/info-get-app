import React from "react"
import Spinner from "../spinner"
import ErrorIndicator from "../errorIndicator"

const WithDataDetails = View => {
  return class extends React.Component {
    state = {
      item: "",
      loading: false,
      image: "",
      err: false
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
      this.setState({ loading: true })
      getDetails(itemId)
        .then(item => {
          this.setState({ item, loading: false, image: getImageUrl(item) })
        })
        .catch(this.onError)
    }

    onError = err => {
      this.setState({ err: true })
    }

    render() {
      const { item, loading, err, image } = this.state

      if (loading) {
        return <Spinner />
      }

      if (err) {
        return <ErrorIndicator />
      }

      return <View {...this.props} item={item} image={image} />
    }
  }
}

export default WithDataDetails

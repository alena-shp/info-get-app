import React from "react"

const WithDataDetails = View => {
  return class extends React.Component {
    state = {
      item: "",
      loading: true,
      image: ""
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
      getDetails(itemId).then(item => {
        this.setState({ item, loading: false, image: getImageUrl(item) })
      })
    }
    render() {
      const { item, loading, image } = this.state
      return (
        <View {...this.props} item={item} loading={loading} image={image} />
      )
    }
  }
}

export default WithDataDetails

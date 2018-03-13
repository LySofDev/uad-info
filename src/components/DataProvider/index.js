import React from 'react'

class DataProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  render() {
    return this.props.render({ data: this.state.data })
  }
}

export default DataProvider

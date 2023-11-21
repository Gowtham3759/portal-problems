import React, { Component } from 'react'
import Day6CE from './day6ce'

class HoverCouunter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>Click Me {this.props.count}</button>
      </div>
    )
  }
}
export default Day6CE(HoverCouunter)
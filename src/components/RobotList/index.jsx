// import packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import components
import Robot from './robot'

export default class RobotList extends Component {
  static propTypes = {
    robots: PropTypes.array.isRequired
  }
  render() {
    const { robots } = this.props
    return robots.map(robot => (
      <Robot
        key={robot.id}
        robot={robot}
      />
    ))
  }
}

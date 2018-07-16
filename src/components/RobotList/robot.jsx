// import packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Robot extends Component {
  static propTypes = {
    robot: PropTypes.object.isRequired
  }
  render() {
    const { robot } = this.props
    const { username, email } = robot
    return (
      <div>
        {username}
        {email}
      </div>
    )
  }
}

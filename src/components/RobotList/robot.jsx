// import packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import material-ui components
import Card from '@material-ui/core/Card';


export default class Robot extends Component {
  static propTypes = {
    robot: PropTypes.object.isRequired
  }
  render() {
    const { robot } = this.props
    const { id, username, email } = robot
    const src = 'https://robohash.org/' + id
    return (
      <div>
        <img src={src} alt={username} />
        {username}
        {email}
      </div>
    )
  }
}

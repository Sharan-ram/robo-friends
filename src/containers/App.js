// import packages
import React, { Component } from 'react'
import 'typeface-roboto'
// import components
import RobotList from '../components/RobotList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          robots: res
        })
      })
  }

  render() {
    const { robots } = this.state
    return robots.length === 0 ?
      <h1>Loading</h1> :
      <div>
        <h1>Robo Friends</h1>
        <RobotList
          robots={robots}
        />
      </div>
  }
}

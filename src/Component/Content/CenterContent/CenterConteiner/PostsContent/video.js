import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return <ReactPlayer width="100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
    }
}
export default Video
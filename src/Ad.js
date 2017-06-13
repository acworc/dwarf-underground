import React, { Component } from 'react'
import './Ad.css'

import AdText from './AdText'
import AdImage from './AdImage'


class Ad extends Component {
  render() {
    return (
        <div className="ad">
            <h3>The Last Hammer You'll Ever Need</h3>
            <div className="ad-image">
            <AdImage />
            <a href="#">visit sponsor</a>
            </div>  
            <h4>Mining diamonds or crushing the skulls of your enemies, the SmashMaster 4000 does it all</h4>
            <AdText />
        </div>
    )
  }
}

export default Ad
import React, { Component } from 'react'
import './Aside.css'

import AdText from './AdText'
import Ad from './Ad'

class Aside extends Component {
  render() {
    return (
        <div>
        <aside className="large-4 medium-12 columns">
          <Ad />
        </aside>
        </div>
    )
  }
}

export default Aside
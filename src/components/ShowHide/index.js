// Write your code here
import './index.css'

import {Component} from 'react'

// eslint-disable-next-line no-undef
class ShowHide extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {showFirstName: false, HideLastName: false}

  onshowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onshowLastName = () => {
    this.setState(prevState => ({HideLastName: !prevState.HideLastName}))
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    // eslint-disable-next-line no-unused-vars
    const {showFirstName, HideLastName} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="bg-container-2">
          <div className="bg-container-3 ">
            <button
              className="btn"
              type="button"
              onClick={this.onshowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="para">Joe</p>}
          </div>
          <div className="bg-container-3">
            <button className="btn" type="button" onClick={this.onshowLastName}>
              Show/Hide Lastname
            </button>
            {HideLastName && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

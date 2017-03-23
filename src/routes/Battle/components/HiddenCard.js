import React from 'react'
import './HiddenCard.scss'


export default class HiddenCard extends React.Component {

  render() {
    return (
      <div className={`px-2 py-4 mx-1 box-shadow game-card grey-faint-bkgrnd mb-2`} >
        <div className="d-flex justify-content-center align-items-center hidden-card-img-holder">
          <img className="card-img-top game-card-img" src="/img/card-reverse-dino.svg" alt="Card image cap"/>
        </div>
      </div>
    )
  }
}

HiddenCard.propTypes = {

}

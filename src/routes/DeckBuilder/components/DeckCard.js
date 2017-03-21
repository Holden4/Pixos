import React from 'react'
import './DeckCard.scss'

export default class DeckCard extends React.Component {

constructor (props) {
  super(props)
}

getSpecialIcon() {
  if (this.props.special) {
    return (
      <img src={`/icons/${this.props.special}.svg`} className={`deck-card-special ${this.props.special}-bkgrnd p-1 circle d-inline-block mx-auto`}/>
    )
  }
}

render() {
  let specialIcon = this.getSpecialIcon()
  return (
    <div className={`deck-card box-shadow mx-1 ${this.props.type}-faint-bkgrnd d-flex align-items-stretch`}>
      <div className={`deck-card-name-holder pb-1 ${this.props.type}-main-bkgrnd`}>
        <h4 className="deck-card-name m-0 text-left highlighted-white-text">
          { this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1) }
        </h4>
      </div>
      <div className="deck-card-img-holder mx-auto mt-1 d-flex justify-content-top align-items-center p-1">
        <img className="deck-card-img px-1" src={this.props.imgUrl} alt="Card image cap"/>
      </div>
      <span className={`deck-card-power ${this.props.type}-bkgrnd circle d-inline-block mx-auto highlighted-white-text`}>
        { this.props.power }
      </span>
      <span className={`deck-card-cost ${this.props.cost}-bkgrnd circle d-inline-block mx-auto highlighted-white-text`}>
        ${ this.props.cost }
      </span>
      { specialIcon }
    </div>
  )
}

  propTypes: {
    type : React.PropTypes.string.isRequired,
    imgUrl : React.PropTypes.string.isRequired,
    name : React.PropTypes.string.isRequired,
    power : React.PropTypes.string.isRequired,
    cost : React.PropTypes.string.isRequired,
    special : React.PropTypes.string.isRequired
  }
}

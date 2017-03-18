import React from 'react'
var cardData = require('../../../../server/cardData').CARD_DATA
import DeckCardWrapper from './DeckCardWrapper'
import './DeckBuilder.scss'
import ChosenCards from './ChosenCards'

export default class DeckBuilder extends React.Component {

  renderDeckComponents () {
    return cardData.map(
      (card, i) => <DeckCardWrapper key={i} {...card} />
    )
  }

  render () {
    let cards = this.renderDeckComponents()
    return (
      <div>
        <h2>DeckBuilder</h2>
        <div className="deck-container d-flex justify-content-center flex-wrap">
          { cards }
        </div>
        <div className="chosen-cards- container d-flex justify-content-center flex-wrap py-5">
          < ChosenCards />
        </div>
      </div>
    )
  }
}

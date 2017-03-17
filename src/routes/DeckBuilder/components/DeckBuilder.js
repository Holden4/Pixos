import React from 'react'
var cardData = require('../../../../server/cardData').CARD_DATA
import Card from '../../Battle/components/Card'

export default class DeckBuilder extends React.Component {

  componentDidMount () {
  }

  renderDeckComponents () {
    console.log(cardData)
    return cardData.map(
      (card, i) => <Card key={i} {...card} />
    )
  }

  render () {
    let cards = this.renderDeckComponents()
    return (
      <div>
        <h2>DeckBuilder</h2>
        { cards }
      </div>
    )
  }
}

import React from 'react'
import { InfoBar } from 'routes/Battle/components/InfoBar'
import { Board } from 'routes/Battle/components/Board'

type Props = {
  cards: Object
}

let fetchingContent = (fetching) => {
  if (fetching) {
    return 'fetching'
  } else {
    return 'not fetching'
  }
}

let cardContent = (cards) => {
  if (cards.length == 0) {
    return 'no cards'
  } else {
    return (
      <div>
        <p>{cards[0].name}</p>
        <img src={cards[0].imgUrl} style={{ height: '50px', width: '50px' }}></img>
      </div>

    )
  }
}

export const Battle = (props) => (
  <div style={{ margin: '0 auto',
                border: '1px solid black',
                height: '600px',
                width: '980px'
 }} >

  { <InfoBar/> }
  { <Board/> }
  <p>{ fetchingContent(props.fetching) }</p>
  <button className='btn btn-default' onClick={props.fetchCards}>
    Fetch Cards
  </button>
  { cardContent(props.cards) }
  </div>
)

Battle.propTypes = {
  fetchCards   : React.PropTypes.func.isRequired,
  cards: React.PropTypes.array.isRequired,
  fetching: React.PropTypes.bool.isRequired
}

export default Battle

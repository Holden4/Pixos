import React from 'react'
import { InfoBar } from 'routes/Battle/components/InfoBar'
import { Board } from 'routes/Battle/components/Board'

type Props = {
  cards: Object
}


export const Battle = (props) => (
  <div style={{ margin: '0 auto',
                border: '1px solid black',
                height: '600px',
                width: '980px'
 }} >

  { <InfoBar/> }
  { <Board/> }
  <p>{ props.fetching }</p>
  <button className='btn btn-default' onClick={props.fetchCards}>
    Fetch Cards
  </button>
  <p>{ props.cards }</p>
  </div>
)

Battle.propTypes = {
  fetchCards   : React.PropTypes.func.isRequired,
  cards: React.PropTypes.object.isRequired,
  fetching: React.PropTypes.bool.isRequired
}

export default Battle

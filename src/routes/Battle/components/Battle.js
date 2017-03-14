import React from 'react'
import { InfoBar } from 'routes/Battle/components/InfoBar'

export const Battle = (props) => (
  <div style={{ margin: '0 auto' }} >

    { <InfoBar/> }
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Battle.propTypes = {
  battle     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Battle

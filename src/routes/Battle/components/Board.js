import React from 'react'
import { Hand } from 'routes/Battle/components/Hand'
import { PlayingArea } from 'routes/Battle/components/PlayingArea'

export const Board = (props) => (
  <div className="board" style={{ margin: '0 100px 0 100px;',
                                  border: '1px solid red',
                                  float: 'left',
                                  height: '80%',
                                  width: '700px'}} >
      { <Hand/> }
      { <PlayingArea/> }
      { <PlayingArea/> }
      { <Hand/> }
  </div>
)

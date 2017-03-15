import React from 'react'
import { InfoBar } from 'routes/Battle/components/InfoBar'
import { Board } from 'routes/Battle/components/Board'


import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');


// export const Battle = (props) => (
//
// )
//
// export default Battle


export default class Battle extends React.Component {

  emitMessage() {
    console.log('emitting message');
    socket.emit('message', 'Hi server, how are you?');
  }

  matchMake() {
    socket.emit('request:matchmaking');
  }

  render() {
    console.log(io);
    console.log(socket);
    return (
      <div style={{ margin: '0 auto',
                    border: '1px solid black',
                    height: '600px',
                    width: '980px'
     }} >

      { <InfoBar/> }
      { <Board/> }
      <button onClick={this.emitMessage}>Poke Server</button>
      <button onClick={this.matchMake}>Matchmake</button>
      </div>
    );
  }
}

import React from 'react'
import { InfoBar } from 'routes/Battle/components/InfoBar'
import { Board } from 'routes/Battle/components/Board'

<script src="/socket.io/socket.io.js"></script>
<script>

  var socket = io.connect('http://localhost:8080');
  socket.on('message', function(message) {
      alert('The server has a message for you: ' + message);
  })

  $('#poke').click(function () {
       socket.emit('message', 'Hi server, how are you?');
   })

   var username = prompt('What\'s your username?');
     socket.emit('player', username);

</script>

export const Battle = (props) => (
  <div style={{ margin: '0 auto',
                border: '1px solid black',
                height: '600px',
                width: '980px'
 }} >

  { <InfoBar/> }
  { <Board/> }

  </div>
)

export default Battle

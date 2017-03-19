import React from 'react'
import InfoBar from 'routes/Battle/components/InfoBar'
import Board from 'routes/Battle/components/Board'
import CircularProgress from 'material-ui/CircularProgress';

import io from 'socket.io-client';
const socket = io.connect(`${window.location.origin}`);

export default class Battle extends React.Component {

  isEndOfRound() {
    console.log("isEndOfRound is being called");
    if ( (this.props.battle.self.hasPassed
      && this.props.battle.enemy.hasPassed)
    || (this.props.battle.self.hand.length === 0
      && this.props.battle.self.hand.length === 0)
    || (this.props.battle.self.hasPassed
      && this.props.battle.enemy.hand.length === 0)
    || (this.props.battle.enemy.hasPassed
      && this.props.battle.self.hand.length === 0) )
    {
      return true;
    }
  }

  loadContent () {
    if(this.props.battle.global.matchMakingComplete == false) {
      return (
        <div className="row">
          <div className="col-12 text-center">
            <h2>Matchmaking</h2>
            <CircularProgress size={60} thickness={7} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="row no-gutters">
          <InfoBar  battle={this.props.battle}
                    setTurnFinished={this.props.setTurnFinished}
                    setMyTurn={this.props.setMyTurn}
                    passTurn={this.props.passTurn}
                    />
          <Board battle={this.props.battle}
                setTurnFinished={this.props.setTurnFinished}
                setMyTurn={this.props.setMyTurn}
                removeCard={this.props.removeCard}
                addCard={this.props.addCard} />
        </div>
      )
    }
  }

  endRound() {
    console.log('endRound is being called');
    if (this.props.battle.self.power > this.props.battle.enemy.power) {
      this.props.updateSelfScore()
    }
    this.props.clearPlayingArea()
    this.props.resetPower()

    if (this.props.battle.enemy.hasPassed == false && this.props.battle.enemy.hand > 0) {
      // this.props.updateRoundCounter()
      this.props.setRoundEnd(false)
    }

    // take turn
      // this.props.setMyTurn(false)
      // this.props.setTurnFinished(true)
    // to do: discardPlayedCards - remove from playing area
    // reset power
    //
  }

  componentDidMount() {
    var that = this
    if(this.props.battle.global.matchMakingComplete == false) {
      socket.emit('request:matchmaking');
    }
    socket.on("init:battle", function(data) {
      console.log("battle initiated");
      that.props.setMatchMakingComplete()
      that.props.setupPlayers(data)
    })
    socket.on("receive:data", function(data) {
      console.log("Received data from Opponent!:", data);
      that.props.setMyTurn(true)
      that.props.updateGlobalState(data.global)
      that.props.updateEnemyState(data.player)
      if (that.isEndOfRound()) { that.props.setRoundEnd(true)}
      if (that.props.global.roundEnd) {
        that.endRound()
      } else if (that.props.battle.self.hasPassed) {
        that.props.setMyTurn(false)
        that.props.setTurnFinished(true)
      }
    })
    console.log('Battle state is:', that.props.battle)
    console.log(socket)
  }

  componentDidUpdate() {
    console.log('Battle state is:', this.props.battle)
    if (this.props.battle.turnFinished) {
      console.log('my turn is finished')
      socket.emit('pass:ToRoom', {player: this.props.battle.self, global: this.props.battle.global})
      this.props.setTurnFinished(false)
    }

  }

  render () {
    let content = this.loadContent();
    return (
      <div>
      { content }

      </div>
    )
  }
}

Battle.propTypes = {
  setupPlayers  : React.PropTypes.func.isRequired,
  setTurnFinished  : React.PropTypes.func.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired,
  battle : React.PropTypes.object.isRequired,
  setMyTurn : React.PropTypes.func.isRequired,
  updateEnemyState : React.PropTypes.func.isRequired,
  passTurn : React.PropTypes.func.isRequired,
  removeCard : React.PropTypes.func.isRequired,
  addCard : React.PropTypes.func.isRequired,
  updateGlobalState : React.PropTypes.func.isRequired,
  updateSelfScore : React.PropTypes.func.isRequired,
  updateEnemyScore : React.PropTypes.func.isRequired,
  clearPlayingArea : React.PropTypes.func.isRequired,
  resetPower : React.PropTypes.func.isRequired,
  setRoundEnd : React.PropTypes.func.isRequired

}

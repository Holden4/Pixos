import React from 'react'
import InfoBar from 'routes/Battle/components/InfoBar'
import Board from 'routes/Battle/components/Board'
import CircularProgress from 'material-ui/CircularProgress';

import io from 'socket.io-client';
const socket = io.connect(`${window.location.origin}`);

export default class Battle extends React.Component {

  isEndOfRound() {
    // if there are no cards in player hands, or both players have passed,
    // or a combination of both
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
        <div className="row pt-5">
          <div className="col-12 text-center pt-5">
            <h2 className="mb-4">Matchmaking</h2>
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
                    setPassTurn={this.props.setPassTurn}
                    />
          <Board battle={this.props.battle}
                setTurnFinished={this.props.setTurnFinished}
                setMyTurn={this.props.setMyTurn}
                removeCard={this.props.removeCard}
                addCard={this.props.addCard}
                updatePower={this.props.updatePower} />
        </div>
      )
    }
  }

  endRound() {
    // if you're score is higher than your enemies increase you're score
    // else if it's lower set your turn to false
    if (this.props.battle.self.power > this.props.battle.enemy.power) {
      this.props.updateSelfScore()
    } else {
      this.props.setMyTurn(false)
    }
    // clear your area and also your enemies area
    // enemy cleared area is not sent across and is purely a diplay function
    this.props.clearPlayingArea()
    this.props.clearEnemyArea()
    this.props.resetPower()
    this.props.setPassTurn(false)
    // if youre enemy has the conditions that mean he is ready to play then
    // change update round counter and set round end to false to break the loop
    if (this.props.battle.enemy.hasPassed == false && this.props.battle.enemy.hand.length > 0) {
      this.props.updateRoundCounter()
      this.props.setRoundEnd(false)
    }
    // if you have lost, send this data to the opponent.
    // they will then run the abovesteps, but carry on with their turn
    if (this.props.battle.self.myTurn == false) {
      this.props.setTurnFinished(true)
    }
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
      // if the end of round conditions are met, the global variable end of
      // round is set to true
      if (that.isEndOfRound()) {that.props.setRoundEnd(true) }
      // if the global variable end of round is true, perform
      // the end of round functions
      if (that.props.battle.global.roundEnd) {
        that.endRound()
      } else if (that.props.battle.self.hasPassed) {
        that.props.setMyTurn(false)
        that.props.setTurnFinished(true)
      }
      console.log('Battle updated with opponent data to:', that.props.battle)
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
  setPassTurn : React.PropTypes.func.isRequired,
  removeCard : React.PropTypes.func.isRequired,
  addCard : React.PropTypes.func.isRequired,
  updatePower : React.PropTypes.func.isRequired,
  updateGlobalState : React.PropTypes.func.isRequired,
  updateSelfScore : React.PropTypes.func.isRequired,
  updateEnemyScore : React.PropTypes.func.isRequired,
  clearPlayingArea : React.PropTypes.func.isRequired,
  resetPower : React.PropTypes.func.isRequired,
  setRoundEnd : React.PropTypes.func.isRequired,
  updateRoundCounter : React.PropTypes.func.isRequired,
  clearEnemyArea : React.PropTypes.func.isRequired

}

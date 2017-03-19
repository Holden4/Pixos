import {
  INITIAL_STATE
} from 'routes/Battle/modules/initialBattleState'

import store from 'store/createStore'

// ------------------------------------
// Constants
// ------------------------------------
export const BATTLE_INCREMENT = 'BATTLE_INCREMENT'
export const BATTLE_DOUBLE_ASYNC = 'BATTLE_DOUBLE_ASYNC'
export const SETUP_PLAYERS = 'SETUP_PLAYERS'
export const SET_NEXT_PLAYER = 'SET_NEXT_PLAYER'
export const SET_PLAYER_PASS = 'SET_PLAYER_PASS'
export const PLAY_CARD = 'PLAY_CARD'
export const SET_TURN_FINISHED = 'SET_TURN_FINISHED'
export const SET_MY_TURN = 'SET_MY_TURN'
export const UPDATE_ENEMY_STATE = 'UPDATE_ENEMY_STATE'
export const SET_PASS_TURN = 'SET_PASS_TURN'
export const REMOVE_CARD = 'REMOVE_CARD'
export const ADD_CARD = 'ADD_CARD'
export const UPDATE_POWER = 'UPDATE_POWER'
export const SET_MATCH_MAKING_COMPLETE = 'SET_MATCH_MAKING_COMPLETE'
export const UPDATE_GLOBAL_STATE = 'UPDATE_GLOBAL_STATE'
export const UPDATE_SELF_SCORE = 'UPDATE_SELF_SCORE'
export const UPDATE_ENEMY_SCORE = 'UPDATE_ENEMY_SCORE'
export const CLEAR_PLAYING_AREA = 'CLEAR_PLAYING_AREA'
export const RESET_POWER = 'RESET_POWER'
export const SET_ROUND_END = 'SET_ROUND_END'
export const UPDATE_ROUND_COUNTER = 'UPDATE_ROUND_COUNTER'


// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : BATTLE_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : BATTLE_DOUBLE_ASYNC,
          payload : getState().battle
        })
        resolve()
      }, 200)
    })
  }
}

export function updateSelfScore() {
  return {
    type: UPDATE_SELF_SCORE,
    payload: 1
  }
}

export function setRoundEnd(boolean) {
  return {
    type: SET_ROUND_END,
    payload: boolean
  }
}
export function updateRoundCounter() {
  return {
    type: UPDATE_ROUND_COUNTER,
    payload: 1
  }
}

export function updateEnemyScore() {
  return {
    type: UPDATE_ENEMY_SCORE,
    payload: 1
  }
}

export function resetPower() {
  return {
    type: RESET_POWER,
    payload: 0
  }
}

export function setupPlayers (data) {
  return {
    type: SETUP_PLAYERS,
    payload: data
  }
}

export function clearPlayingArea () {
  return {
    type: CLEAR_PLAYING_AREA,
    payload: []
  }
}

export function addCard (cardId) {
  return {
    type: ADD_CARD,
    payload: cardId
  }
}

export function removeCard(cardId) {
  return {
    type: REMOVE_CARD,
    payload: cardId
  }
}

export function updatePower () {
  return {
    type: UPDATE_POWER
  }
}

export function setTurnFinished (boolean) {
  return {
    type: SET_TURN_FINISHED,
    payload: boolean
  }
}

export function setMyTurn (boolean) {
  return {
    type: SET_MY_TURN,
    payload: boolean
  }
}
export function setMatchMakingComplete () {
  return {
    type: SET_MATCH_MAKING_COMPLETE,
    payload: true
  }
}

export function setPassTurn (boolean) {
  return {
    type: SET_PASS_TURN,
    payload: boolean
  }
}

export function updateGlobalState (data) {
  return {
    type: UPDATE_GLOBAL_STATE,
    payload: data
  }
}

export function updateEnemyState (object) {
  return {
    type: UPDATE_ENEMY_STATE,
    payload: object
  }
}

export const actions = {
  increment,
  doubleAsync,
  setupPlayers,
  setMyTurn,
  updatePower,
  addCard,
  removeCard
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BATTLE_INCREMENT]    : (state, action) => state + action.payload,
  [BATTLE_DOUBLE_ASYNC] : (state, action) => state * 2,
  [SETUP_PLAYERS] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        hand: action.payload.selfHand,
        myTurn: action.payload.selfTurn,
        name: action.payload.selfName
      }),
      enemy: Object.assign({}, state.enemy, {
        hand: action.payload.enemyHand,
        name: action.payload.enemyName
      })
    })
  },
  [SET_TURN_FINISHED] : (state, action) => {
    return Object.assign({}, state, {
      turnFinished: action.payload
    })
  },
  [SET_ROUND_END] : (state, action) => {
    return Object.assign({}, state, {
      global: Object.assign({}, state.global, {
        roundEnd: action.payload
      }),
    })
  },
  [UPDATE_ROUND_COUNTER] : (state, action) => {
    return Object.assign({}, state, {
      global: Object.assign({}, state.global, {
        roundCounter: state.global.roundCounter + action.payload
      }),
    })
  },
  [RESET_POWER] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        power: action.payload
      }),
    })
  },

  [SET_PASS_TURN] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        hasPassed: action.payload
      }),
    })
  },
  [CLEAR_PLAYING_AREA] : (state, action) => {
    console.log('CLEAR PLAYING AREA IS BEING CALLED');
    console.log('Before function call', state.self.playingArea);
    state.self.playingArea.land = []
    state.self.playingArea.air = []
    state.self.playingArea.water = []
    console.log('After function call', state.self.playingArea);
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        playingArea: state.self.playingArea
      }),
    })
  },
  [SET_MY_TURN] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        myTurn: action.payload
      }),
    })
  },
  [UPDATE_SELF_SCORE] : (state, action) => {
    console.log('UPDATE SELF SCORE IS BEING CALLED');

    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        score: state.self.score + action.payload
      }),
    })
  },
  [UPDATE_ENEMY_SCORE] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.enemy, {
        score: state.enemy.score + action.payload
      }),
    })
  },
  [SET_MATCH_MAKING_COMPLETE] : (state, action) => {
    return Object.assign({}, state, {
      global: Object.assign({}, state.global, {
        matchMakingComplete: action.payload
      }),
    })
  },
  [ADD_CARD] : (state, action) => {
    var card = (state.self.hand[action.payload])
    if(card.type == 'water'){ state.self.playingArea.water.push(card) }
    else if (card.type == 'land'){ state.self.playingArea.land.push(card) }
    else { state.self.playingArea.air.push(card) }
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        playingArea: state.self.playingArea
      }),
    })
  },
  [REMOVE_CARD] : (state, action) => {
    state.self.hand.splice(action.payload, 1)
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        hand: state.self.hand
      }),
    })
  },
  [UPDATE_ENEMY_STATE] : (state, action) => {
    return Object.assign({}, state, {
      enemy: action.payload
    })
  },
  [UPDATE_POWER] : (state, action) => {
    let enemyPower = 0
    for (let array of Object.values(state.enemy.playingArea)) {
      array.forEach((card) => {
          enemyPower += card.power
      })
    }

    let selfPower = 0
    for (let array of Object.values(state.self.playingArea)) {
      array.forEach((card) => {
          selfPower += card.power
      })
    }

    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        power: selfPower
      }),
      enemy: Object.assign({}, state.enemy, {
        power: enemyPower
      })
    })
  },

  [UPDATE_GLOBAL_STATE] : (state, action) => {
    return Object.assign({}, state, {
      global: action.payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = INITIAL_STATE
export default function battleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

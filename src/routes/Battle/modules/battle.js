

// ------------------------------------
// Constants
// ------------------------------------
// export const BATTLE_INCREMENT = 'BATTLE_INCREMENT'
// export const BATTLE_DOUBLE_ASYNC = 'BATTLE_DOUBLE_ASYNC'
export const BATTLE_REQUEST_CARDS = 'BATTLE_REQUEST_CARDS'
export const BATTLE_RECEIVE_CARDS = 'BATTLE_RECEIVE_CARDS'

// ------------------------------------
// Actions
// ------------------------------------
// export function increment (value = 1) {
//   return {
//     type    : BATTLE_INCREMENT,
//     payload : value
//   }
// }

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
//


export function requestCards (): Action {
  return {
    type: BATTLE_REQUEST_CARDS
  }
}

export function receiveCards (json): Action {
  console.log(json)
  return {
    type: BATTLE_RECEIVE_CARDS,
    payload: json
  }
}

export const fetchCards = (): Function => {
  console.log('fetching cards');
  return (dispatch: Function): Promise => {
    dispatch(requestCards())

    return fetch(`${window.location.origin}/api/cards`)
      .then(res => {
        console.log('res is');
        console.log(res);
        let json = res.json();
        console.log(json);
        return json
      })
      .then(json => {
        console.log(json);
        dispatch(receiveCards(json))
      })
  }
}

export const actions = {
  // increment,
  // doubleAsync,
  requestCards,
  receiveCards,
  fetchCards
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  // [BATTLE_INCREMENT]    : (state, action) => state + action.payload,
  // [BATTLE_DOUBLE_ASYNC] : (state, action) => state * 2,
  [BATTLE_REQUEST_CARDS]: (state, action) => {
    return Object.assign({}, state, {
        fetching: true
      })
  },
  [BATTLE_RECEIVE_CARDS]: (state, action) => {
    console.log(state);
    console.log(action.payload);
    return Object.assign({}, state, {
        cards: action.payload.cards
      })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { fetching: false, cards: [] }
export default function battleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

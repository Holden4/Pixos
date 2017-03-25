import {
  PLACE_IN_DECK,
  REMOVE_FROM_DECK,
  placeInDeck,
  removeFromDeck,
  default as deckbuilderReducer
} from 'routes/DeckBuilder/modules/deckbuilder'

import {
  DECKBUILD_STATE
} from 'routes/DeckBuilder/modules/initialDeckState'

describe('(Redux Module) DeckBuilder', () => {
    expect(PLACE_IN_DECK).to.equal('PLACE_IN_DECK')
    expect(REMOVE_FROM_DECK).to.equal('REMOVE_FROM_DECK')
})

describe('(Reducer) Deck Builder', () => {
  it('Should be a function.', () => {
    expect(deckbuilderReducer).to.be.a('function')
  })

  it('Should initialize with a blank deck.', () => {
    expect(deckbuilderReducer(undefined, {})).to.equal(DECKBUILD_STATE)
  })

  it('Should return the previous state if an action was not matched.', () => {
    let state = deckbuilderReducer(undefined, {})
    expect(state).to.equal(DECKBUILD_STATE)
    state = deckbuilderReducer(state, { type: '@@@@@@@' })
    expect(state).to.equal(DECKBUILD_STATE)
  })
})

describe('(Action Creator) placeInDeck', () => {
  it('Should be exported as a function.', () => {
    expect(placeInDeck).to.be.a('function')
  })

  it('Should return an action with type "PLACE_IN_DECK".', () => {
    expect(placeInDeck()).to.have.property('type', PLACE_IN_DECK)
  })
})

describe('(Action Creator) removeFromDeck', () => {
  it('Should be exported as a function.', () => {
    expect(removeFromDeck).to.be.a('function')
  })

  it('Should return an action with type "REMOVE_FROM_DECK".', () => {
    expect(removeFromDeck()).to.have.property('type', REMOVE_FROM_DECK)
  })
})

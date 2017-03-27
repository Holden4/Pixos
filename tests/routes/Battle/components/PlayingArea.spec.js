import React from 'react'
import { bindActionCreators } from 'redux'
import PlayingArea from 'routes/Battle/components/PlayingArea'
import BattleRow from 'routes/Battle/components/BattleRow'
import { shallow } from 'enzyme'

describe('(Component) PlayingArea', () => {
  let _props, _wrapper
  _props = { type: 'land',
             passed: false,
             cardArrays: {
               land: [],
               air: [],
               water: []
             } }

  beforeEach(() => {
    _wrapper = shallow(<PlayingArea {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should render three BattleRows.', () => {
    const battleRows = _wrapper.find(BattleRow);
    expect(battleRows).to.have.length(3);
  })

});

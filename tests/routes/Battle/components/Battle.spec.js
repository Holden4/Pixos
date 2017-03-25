import React from 'react'
import { Battle } from 'routes/Battle/components/Battle'
// import { InfoBar } from 'routes/Battle/components/InfoBar'
// import { Board } from 'routes/Battle/components/Board'
import { shallow } from 'enzyme'
// import { TEST_STATE } from './BattleStateHelper'

// xdescribe('(Component) Battle', () => {
//   let _props, _wrapper
//
//   beforeEach(() => {
//     _props = { TEST_STATE }
//     _wrapper = render(<Battle {..._props} />)
//   })
//   it('Should render as a <div>.', () => {
//     expect(_wrapper.is('div')).to.equal(true)
//   })
//   it('Should render an InfoBar.', () => {
//     const infobar = _wrapper.find(InfoBar)
//     expect(infobar).to.exist
//   })
//   it('Should render a Board.', () => {
//     const board = _wrapper.find(Board)
//     expect(board).to.exist
//   })
// })


describe('(Component) Battle', () => {
  it('Should render as a <div>.', () => {
    expect(shallow(<Battle />).is('div')).to.equal(true)
  })
});

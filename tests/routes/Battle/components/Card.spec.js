import React from 'react'
import { Card } from 'routes/Battle/components/Card'
import { shallow } from 'enzyme'

xdescribe('(Component) Card', () => {
  it('Should render as a <div>.', () => {
    expect(shallow(<Card />).is('div')).to.equal(true)
  })
});

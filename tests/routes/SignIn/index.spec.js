import SignInRoute from 'routes/SignIn'

describe ('(Route) SignIn', () => {
  let _component

  beforeEach(() => {
    _component = SignInRoute.component
  })

  it('Should return a route configuration object', () => {
    expect(typeof SignInRoute).to.equal('object')
  })
})

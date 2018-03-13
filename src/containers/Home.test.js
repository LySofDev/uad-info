import React from 'react'
import '../test-helper'
import { mount } from 'enzyme'
import Home from './Home'

describe("Home", () => {
  let props, mountedHomePage

  const homePage = () => {
    if (!mountedHomePage) {
      mountedHomePage = mount(
        <Home {...props} />
      )
    }
    return mountedHomePage
  }

  beforeEach(() => {
    props = {}
    mountedHomePage = undefined
  })

  it("always renders the header", () => {
    const h1s = homePage().find('h1')
    expect(h1s.length).toBeGreaterThan(0)
  })

})

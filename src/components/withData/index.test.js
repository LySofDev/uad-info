import React from 'react'
import '../../test-helper'
import { mount } from 'enzyme'
import withData from './'

const TestComponent = withData(props => (<div className="test-component" />))

describe("withData", () => {
  let props, mountedTestComponent

  const testComponent = () => {
    if (!mountedTestComponent) {
      mountedTestComponent = mount(
        <TestComponent {...props} />
      )
    }
    return mountedTestComponent
  }

  beforeEach(() => {
    props = {}
    mountedTestComponent = undefined
  })

  it("attaches a data prop to any component", () => {
    const component = testComponent()
    expect(typeof component.prop('data')).toBe("object")
    expect(Object.keys(component.prop('data')).length).toBeGreaterThan(0)
  })
})

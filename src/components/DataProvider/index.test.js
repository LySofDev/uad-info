import React from 'react'
import '../../test-helper'
import { mount } from 'enzyme'
import DataProvider from './'

describe("DataProvider", () => {
  let props, mountedDataProvider

  const dataProvider = () => {
    if (!mountedDataProvider) {
      mountedDataProvider = mount(
        <DataProvider {...props} />
      )
    }
    return mountedDataProvider
  }

  beforeEach(() => {
    props = {}
    mountedDataProvider = undefined
  })

  it("provides a data object to its render prop", () => {
    props = {
      render: ({ data }) => (<div className="test-child" data={data} />)
    }
    const divs = dataProvider().find('div.test-child')
    expect(divs.length).toBeGreaterThan(0)
    expect(divs.first().prop('data')).toEqual({})
  })

})

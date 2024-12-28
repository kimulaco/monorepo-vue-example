import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('propsのmsgが正しく表示されること', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello Vitest'
      }
    })
    expect(wrapper.find('h1').text()).toBe('Hello Vitest')
  })
})

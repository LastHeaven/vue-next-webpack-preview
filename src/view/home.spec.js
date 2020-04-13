import Home from './Home.vue'
import { mount } from '@vue/test-utils'
import { useRoute } from 'vue-router'

jest.mock('vue-router')

useRoute.mockImplementation(() => {
  return {
    query: {
      abc: 1
    }
  }
})

test('renders a todo', () => {
  const wrapper = mount(Home)
  const h1 = wrapper.find('h1')
  expect(h1.text()).toBe('Hello Vue 3!')
  expect(wrapper.componentVM.count).toBe(0)
  const button = wrapper.find('button')
  button.trigger('click')
  button.trigger('click')
  expect(wrapper.componentVM.count).toBe(1)
})

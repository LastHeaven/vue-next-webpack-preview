import { mount } from '@vue/test-utils'
import MButton from './MButton'

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

describe('<m-button/>', () => {

  it('异步点击事件', async () => {
    const mockFn = jest.fn(async () => {
      await sleep(50)
    })
    const View = {
      components: { MButton },
      template: '<m-button @click="onClick">点击</m-button>',
      setup () {
        return {
          async onClick () {
            await mockFn()
          }
        }
      }
    }

    const wrapper = mount(View)

    wrapper.find('button').trigger('click')
    // 初始化时不在loading状态
    expect(wrapper.find('button').attributes().class).not.toContain('is-loading')
    await wrapper.trigger('click')
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1)
    // 点击完处于loading状态
    expect(wrapper.find('button').attributes().class).toContain('is-loading')
    // 未加载完处于loading状态
    await sleep(10)
    expect(wrapper.find('button').attributes().class).toContain('is-loading')
    // loading状态不能被再次点击
    await wrapper.trigger('click')
    expect(mockFn).toBeCalledTimes(1)
    // 加载完不在loading状态
    await sleep(50)
    expect(wrapper.find('button').attributes().class).not.toContain('is-loading')
  })

  it('同步点击事件', async () => {
    const View = {
      components: { MButton },
      template: '<m-button @click="onClick">点击</m-button>',
      setup () {
        return {
          onClick () {}
        }
      }
    }

    const wrapper = mount(View)
    // 初始化时不在loading状态
    expect(wrapper.find('button').attributes().class).not.toContain('is-loading')
    await wrapper.trigger('click')
    // 加载完不在loading状态
    await sleep(10)
    expect(wrapper.find('button').attributes().class).not.toContain('is-loading')
  })

})

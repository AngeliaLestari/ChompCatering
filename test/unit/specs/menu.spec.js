import { mount } from '@vue/test-utils'
import menu from '@/components/menu.vue'

describe('menu.vue', () => {
  it('it should shows correct title', () => {
    const wrapper = mount(menu)
    expect(wrapper.vm.$el.querySelector('#title').textContent)
      .to.equal('ORDER MENU Select Details')
  })
  it('div should exist', () => {
    const wrapper = mount(menu)
    const div = wrapper.find('div')
    // eslint-disable-next-line no-unused-expressions
    expect(div.exists()).to.be.true
  })
  it('ensure a function is a function', () => {
    const wrapper = mount(menu)
    expect(wrapper.vm.properCase).to.be.a('function')
  })
  it('the list of price should contain 4 items', () => {
    const wrapper = mount(menu)
    expect(wrapper.vm.$el.textContent)
      .to.contain('MAIN', 'MEAT', 'VEGETABLE', 'DESSERT')
  })
  it('Checked Radio Button to be true', async () => {
    const wrapper = mount(menu)
    const radioInput = wrapper.find('input[type="radio"]')
    await radioInput.setChecked()
    // eslint-disable-next-line no-unused-expressions
    expect(radioInput.element.checked).to.be.true
  })
  it('Checked radio button should render correct value', async () => {
    const wrapper = mount(menu)
    const radioInput = wrapper.find('#jelly')
    await radioInput.setChecked()
    expect(wrapper.vm.$data.dessert).to.equal('honey lemon grass jelly')
  })
  it('input number should render correct value', async () => {
    const wrapper = mount(menu)
    const numberInput = wrapper.find('input[type="number"]')
    await numberInput.setValue('2')
    expect(wrapper.vm.$data.quantity).to.equal('2')
  })
  it('price shown upon clicking', async () => {
    const wrapper = mount(menu)
    const isShow = wrapper.find('#checkprice')
    await isShow.trigger('click')
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper.vm.$data.visible).to.be.true
  })
  it('the return string should be title case', () => {
    const wrapper = mount(menu)
    expect(wrapper.vm.properCase('it should turn to title case')).to.equal('It Should Turn To Title Case')
    expect(wrapper.vm.properCase(' ')).to.equal('No Selection')
  })
  it('entry should be reset upon click reset button', async () => {
    const wrapper = mount(menu)
    const resetButton = wrapper.find('#reset')
    await resetButton.trigger('click')
    expect(wrapper.vm.$data.meat).to.equal(' ')
    expect(wrapper.vm.$data.vegetable).to.equal(' ')
    expect(wrapper.vm.$data.dessert).to.equal(' ')
    expect(wrapper.vm.$data.quantity).to.equal(0)
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper.vm.$data.valid).to.be.false
  })
})

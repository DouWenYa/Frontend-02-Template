import { Component, STATE_SYMBOL, ATTRIBUTES_SYMBOL, createElement } from './libs/framework.js'

class List extends Component {
  constructor() {
    super()

  }
  render () {
    this.childText = this[ATTRIBUTES_SYMBOL].data.map(this.template)
    this.root = (<div>{this.childText}</div>).render()
    return this.root
  }
  appendChild (child) {
    this.template = (child)
    this.render()
  }
}

export {
  List
}
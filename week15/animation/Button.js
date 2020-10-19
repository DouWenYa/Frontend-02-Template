import { Component, STATE_SYMBOL, ATTRIBUTES_SYMBOL, createElement } from './libs/framework.js'

class Button extends Component {
  constructor() {
    super()

  }
  render () {
    this.childText = <span></span>
    this.root = (<div>{this.childText}</div>).render()
    return this.root
  }
  appendChild (child) {
    if (!this.childText) {
      this.render()
    }
    this.childText.appendChild(child)
  }
}

export {
  Button
}
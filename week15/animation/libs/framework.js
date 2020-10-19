export function createElement (el, attr, ...childs) {
  let element = null
  if (typeof el === 'string') {
    element = new Elem(el)
  } else {
    element = new el;
  }
  for (const key in attr) {
    element.setAttribute(key, attr[key])
  }
  const childList = (childs) => {
    for (const child of childs) {
      if (typeof child === 'string') {
        child = new TextNode(child)
      } else if (Array.isArray(child)) {
        childList(child)
        continue
      }
      element.appendChild(child)
    }
  }
  childList(childs)

  return element
}
export const STATE_SYMBOL = Symbol('state')
export const ATTRIBUTES_SYMBOL = Symbol('attributes')


export class Component {
  constructor() {
    // this.root = this.render()
    this[ATTRIBUTES_SYMBOL] = Object.create(null)
    this[STATE_SYMBOL] = Object.create(null)
  }
  render () {
    return this.root
  }
  setAttribute (key, val) {
    this[ATTRIBUTES_SYMBOL][key] = val
  }
  appendChild (child) {
    child.mountTo(this.root)
  }
  mountTo (el) {
    if (!this.root) {
      this.render()
    }
    el.appendChild(this.root)
  }
  triggerEvent (type, args) {
    this[ATTRIBUTES_SYMBOL]['on' + type.replace(/^[\s\S]/, s => s.toUpperCase())](new CustomEvent(type, { detail: args }))
  }
}

class Elem extends Component {
  constructor(type) {
    super()
    this.root = document.createElement(type)
  }
  setAttribute (key, val) {
    this.root.setAttribute(key, val)
  }

}
class TextNode extends Component {
  constructor(type) {
    super()
    this.root = document.createTextNode(type)
  }


}
// class Div extends Component {
//   constructor() {
//     this.root = document.createElement('div')
//   }

// }

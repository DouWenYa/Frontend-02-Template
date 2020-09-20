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
  for (const child of childs) {
    if (typeof child === 'string') {
      child = new TextNode(child)
    }
    element.appendChild(child)
  }
  return element
}



export class Component {
  constructor() {
    // this.root = this.render()
  }
  setAttribute (key, val) {
    this.root.setAttribute(key, val)
  }
  appendChild (child) {
    child.mountTo(this.root)
  }
  mountTo (el) {
    el.appendChild(this.root)
  }
}

class Elem extends Component {
  constructor(type) {
    this.root = document.createElement(type)
  }

}
class TextNode extends Component {
  constructor(type) {
    this.root = document.createTextNode(type)
  }


}
// class Div extends Component {
//   constructor() {
//     this.root = document.createElement('div')
//   }

// }

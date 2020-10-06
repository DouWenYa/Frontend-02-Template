import { Component } from './framework.js'

export class Carousel extends Component {
  constructor() {
    super()
    this.attributes = Object.create(null)
  }
  render () {
    this.root = document.createElement('div')
    this.root.classList.add('container')
    for (const attr of this.attributes.src) {
      let node = document.createElement('div')
      node.style.backgroundImage = `url(${attr})`
      this.root.append(node)
    }
    /* let curIndex = 0
    setInterval(() => {
      let childs = this.root.children
      let nextIndex = (curIndex + 1) % childs.length
      let curNode = childs[curIndex]
      let nextNode = childs[nextIndex]
      nextNode.style.transition = 'none'
      nextNode.style.transform = `translateX(${100 - 100 * nextIndex}%)`
      setTimeout(() => {
        nextNode.style.transition = ''
        curNode.style.transform = `translateX(-${100 + 100 * curIndex}%)`
        nextNode.style.transform = `translateX(-${100 * nextIndex}%)`
        curIndex = nextIndex
      }, 16)

    }, 2000) */
    let position = 0
    this.root.addEventListener('mousedown', e => {
      let children = this.root.children
      const { width } = children[0].getBoundingClientRect()
      let startX = e.clientX
      let move = (e) => {
        let x = e.clientX - startX
        let cur = position - ((x - x % width) / width)
        for (const offset of [-1, 0, 1]) {
          let pos = cur + offset
          pos = (pos + children.length) % children.length
          children[pos].style.transition = 'none'
          children[pos].style.transform = `translateX(${-pos * width + offset * width + x % width}px)`
        }
      }
      let up = (e) => {
        let x = e.clientX - startX
        position = position - Math.round(x / width)
        for (const offset of [0, -Math.sign(Math.round(x / width) - x + (width / 2) * Math.sign(x))]) {
          let pos = position + offset
          pos = (pos + children.length) % children.length
          children[pos].style.transition = ''
          children[pos].style.transform = `translateX(${-pos * width + offset * width}px)`
        }
        document.removeEventListener('mouseup', up)
        document.removeEventListener('mousemove', move)
      }
      document.addEventListener('mouseup', up)
      document.addEventListener('mousemove', move)
    })

    return this.root
  }
  setAttribute (name, val) {
    this.attributes[name] = val
  }
  mountTo (el) {
    el.appendChild(this.render())
  }
}


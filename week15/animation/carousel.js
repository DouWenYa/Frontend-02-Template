import { Component, STATE_SYMBOL, ATTRIBUTES_SYMBOL } from './libs/framework.js'
import { TimeLine, Animation } from './libs/animation.js'
import { InitGesture } from './libs/gesture.js'
import { linear } from './libs/timeFn.js'
export { STATE_SYMBOL } from './libs/framework.js'
export class Carousel extends Component {
  constructor() {
    super()
  }
  render () {
    this.root = document.createElement('div')
    this.root.classList.add('container')
    for (const attr of this[ATTRIBUTES_SYMBOL].src) {
      let node = document.createElement('div')
      node.style.backgroundImage = `url(${attr.src})`
      this.root.append(node)
    }

    let timeline = new TimeLine
    timeline.start()
    this[STATE_SYMBOL].position = 0
    let children = this.root.children
    let handler = null
    let t = 0 //计算动画执行时间
    let ax = 0////计算动画偏移量
    InitGesture(this.root)
    //自动播放
    let autoPlay = () => {
      t = Date.now()
      console.log('autoPlay', this[STATE_SYMBOL].position)
      let childs = this.root.children
      let nextIndex = (this[STATE_SYMBOL].position + 1) % childs.length
      let curNode = childs[this[STATE_SYMBOL].position]
      let nextNode = childs[nextIndex]
      nextNode.style.transition = 'none'
      nextNode.style.transform = `translateX(${100 - 100 * nextIndex}px)`
      timeline.add(new Animation(curNode.style, 'transform', -this[STATE_SYMBOL].position * 500, -500 - this[STATE_SYMBOL].position * 500, 500, 0, linear, v => `translateX(${v}px)`))
      timeline.add(new Animation(nextNode.style, 'transform', 500 - nextIndex * 500, -nextIndex * 500, 500, 0, linear, v => `translateX(${v}px)`))
      this[STATE_SYMBOL].position = nextIndex
      this.triggerEvent('change', { position: this[STATE_SYMBOL].position })
    }
    handler = setInterval(autoPlay, 2000)
    this.root.addEventListener('start', (e) => {
      timeline.pouse()
      clearInterval(handler)// 停止自动播放
      if (t) { //防止定时器没启动，t=0 计算ax有问题
        let progress = (Date.now() - t) / 500
        ax = linear(progress * 500) - 500
      }
    })
    this.root.addEventListener('tap', (e) => {
      this.triggerEvent('click', {
        position: this[STATE_SYMBOL].position,
        data: this[ATTRIBUTES_SYMBOL].src[this[STATE_SYMBOL].position]
      })
    })
    this.root.addEventListener('pan', (e) => {
      const { width } = children[0].getBoundingClientRect();
      let x = e.clientX - e.startX - ax
      let cur = this[STATE_SYMBOL].position - ((x - x % width) / width)
      for (const offset of [-1, 0, 1]) {
        let pos = cur + offset
        pos = (pos % children.length + children.length) % children.length
        children[pos].style.transition = 'none'
        children[pos].style.transform = `translateX(${-pos * width + offset * width + x % width}px)`
      }
    })
    this.root.addEventListener('end', (e) => {
      timeline.reset()
      timeline.start()
      handler = setInterval(autoPlay, 2000)
      const { width } = children[0].getBoundingClientRect();
      let x = e.clientX - e.startX - ax
      let direction = Math.round((x % width) / width)
      let cur = this[STATE_SYMBOL].position - (x - x % width) / width
      if (e.isFlick) {
        console.log('speed', e.speed)
        if (e.speed < 0) {
          direction = Math.ceil((x % width) / width)
        } else {

          direction = Math.floor((x % width) / width)
        }

      }
      // for (const offset of [0, -Math.sign(Math.round(x / width) - x + (width / 2) * Math.sign(x))]) {
      for (const offset of [-1, 0, 1]) {

        let pos = cur + offset
        pos = (pos % children.length + children.length) % children.length
        console.log('offset', offset)
        console.log('pos', pos, direction)
        timeline.add(new Animation(children[pos].style, 'transform',
          -pos * width + offset * width + x % width,
          -pos * width + offset * width + direction * width,
          500, 0, linear, v => `translateX(${v}px)`))

        // children[pos].style.transition = ''
        // children[pos].style.transform = `translateX(${-pos * width + offset * width}px)`
      }
      this[STATE_SYMBOL].position = this[STATE_SYMBOL].position - ((x - x % width) / width) - direction

      this[STATE_SYMBOL].position = (this[STATE_SYMBOL].position + children.length) % children.length
      this.triggerEvent('change', { position: this[STATE_SYMBOL].position })
      console.log('end', this[STATE_SYMBOL].position)
    })


    /* this.root.addEventListener('mousedown', e => {
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
    }) */

    return this.root
  }
  /*  setAttribute (name, val) {
     this.attributes[name] = val
   }
   mountTo (el) {
     el.appendChild(this.render())
   } */
}


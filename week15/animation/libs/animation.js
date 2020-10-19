

const TICK = Symbol('tick')
const TICK_HANDLER = Symbol('tick-handler')
const ANIMATIONS = Symbol('animations')
const START_TIME = Symbol('start-time')
const POUSE_TIME = Symbol('pouse-time')
const POUSE_START = Symbol('pouse-start')
class TimeLine {
  constructor() {
    this[ANIMATIONS] = new Set()
    this[START_TIME] = new Map()
    this.state = "inited"
  }
  start () {
    if (this.state !== "inited") {
      return
    }
    this.state = 'start'
    let startTime = Date.now()
    this[POUSE_TIME] = 0
    this[TICK] = () => {
      const now = Date.now()
      for (const animate of this[ANIMATIONS]) {
        let t;
        if (this[START_TIME].get(animate) < startTime) {
          t = now - startTime - this[POUSE_TIME] - animate.delay
        } else {
          t = now - this[START_TIME].get(animate) - this[POUSE_TIME] - animate.delay
        }

        if (animate.duration < t) {
          this[ANIMATIONS].delete(animate)
          t = animate.duration
        }
        if (t > 0) {
          animate.receive(t)
        }
      }
      this[TICK_HANDLER] = requestAnimationFrame(this[TICK])
    }
    this[TICK]()
  }
  pouse () {
    if (this.state !== 'start') {
      return
    }
    this.state = 'pouse'
    this[POUSE_START] = Date.now()
    cancelAnimationFrame(this[TICK_HANDLER])
  }
  resume () {
    if (this.state !== 'pouse') {
      return
    }
    this.state = 'start'
    this[POUSE_TIME] += Date.now() - this[POUSE_START]
    this[TICK]()
  }
  reset () {
    this.state = 'inited'
    this.pouse()
    this[POUSE_TIME] = 0
    this[POUSE_START] = 0
    this[TICK_HANDLER] = null
    this[ANIMATIONS] = new Set()
    this[START_TIME] = new Map()
  }
  add (animate, delay) {
    if (arguments.length < 2) {
      delay = Date.now()
    }
    this[ANIMATIONS].add(animate)
    this[START_TIME].set(animate, delay)
  }

}


///
class Animation {
  constructor(obj, prop, startValue, endValue, duration, delay, timeFn, template) {
    this.obj = obj
    this.prop = prop
    this.startValue = startValue
    this.endValue = endValue
    this.duration = duration
    this.delay = delay
    this.timeFn = timeFn || (v => v)
    this.template = template || (v => v)
  }
  receive (time) {
    //console.log(time)
    let gut = this.endValue - this.startValue
    let progress = this.timeFn(time / this.duration)
    this.obj[this.prop] = this.template(this.startValue + gut * progress)
  }
}
export {
  TimeLine,
  Animation
}
/* const el = document.documentElement
let contexts = new Map()
let isListenning = false
//pc端手势
el.addEventListener('contextmenu', e => e.preventDefault())
el.addEventListener('mousedown', e => {

  const context = Object.create(null)
  contexts.set('mouse' + (1 << e.button), context)
  start(e, context)
  const mousemove = (ev) => {
    let button = 1
    while (button <= ev.buttons) {
      if (button & ev.buttons) {
        let key;
        if (button === 2) { //右键
          key = 4
        } else if (button === 4) {
          key = 2
        } else {
          key = button
        }
        const context = contexts.get('mouse' + key)
        move(ev, context)
      }
      button = button << 1
    }

  }
  const up = (e) => {
    const context = contexts.get('mouse' + (1 << e.button))
    end(e, context)

    contexts.delete('mouse' + (1 << e.button))
    if (e.buttons === 0) {
      document.removeEventListener('mousemove', mousemove)
      document.removeEventListener('mouseup', up)
      isListenning = false
    }
  }


  if (!isListenning) {
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', up)
    isListenning = true
  }
})

//移动端手势
el.addEventListener('touchstart', e => {
  for (const touch of e.changedTouches) {
    const context = Object.create(null)
    contexts.set(touch.identifier, context)
    start(touch, context)
  }
})
el.addEventListener('touchmove', e => {
  for (const touch of e.changedTouches) {
    const context = contexts.get(touch.identifier)
    move(touch, context)
  }
})
el.addEventListener('touchend', e => {
  for (const touch of e.changedTouches) {
    const context = contexts.get(touch.identifier)
    end(touch, context)
    contexts.delete(touch.identifier)
  }
})
el.addEventListener('touchcancel', e => {
  for (const touch of e.changedTouches) {
    const context = contexts.get(touch.identifier)
    cancel(touch, context)
    contexts.delete(touch.identifier)
  }
})


const start = (pos, context) => {
  context.startX = pos.clientX, context.startY = pos.clientY
  context.isPan = false, context.isTap = true, context.isPress = false
  context.points = [
    {
      t: Date.now(),
      x: pos.clientX,
      y: pos.clientY
    }
  ]
  context.handler = setTimeout(() => {
    console.log('press')
    dispatch('press', context)
    context.handler = null
    context.isPan = false, context.isTap = false, context.isPress = true
  }, 500)
}
const move = (pos, context) => {
  // console.log('move', pos.clientX, pos.clientY)
  let dx = pos.clientX - context.startX
  let dy = pos.clientY - context.startY
  if (!context.isPan && dx ** 2 + dy ** 2 > 100) {//移动距离大于10px，最好区分屏幕，这里dpx=2 设置10
    console.log('panstart')
    dispatch('panstart', context)
    context.isPan = true, context.isTap = false, context.isPress = false
    clearTimeout(context.handler)
  }
  if (context.isPan) {
    console.log('pan')
    dispatch('pan', context)
  }
  context.points = context.points.filter(v => Date.now() - v.t < 500)
  context.points.push({
    t: Date.now(),
    x: pos.clientX,
    y: pos.clientY
  })
}
const end = (pos, context) => {
  if (context.isTap) {
    console.log('tap')
    dispatch('tap', {})
    clearTimeout(context.handler)
  }
  if (context.isPan) {
    console.log('panEnd')
    dispatch('panEnd', context)
  }
  if (context.isPress) {
    console.log('pressEnd')
    dispatch('pressEnd', context)
  }
  context.points = context.points.filter(v => Date.now() - v.t < 500)
  let d, v;
  if (!context.points.length) {
    v = 0
  } else {
    console.log(context)
    d = Math.sqrt((pos.clientX - context.points[0].x) ** 2 + (pos.clientY - context.points[0].y) ** 2)
    v = d / (Date.now() - context.points[0].t)
  }
  console.log('v', v)
  if (v > 1.5) {
    context.isFlick = true
    console.log('flick')
    dispatch('flick', context)
  } else {
    context.isFlick = false
  }
  // console.log('end', pos.clientX, pos.clientY)
}
const cancel = (pos, context) => {
  clearTimeout(context.handler)
  // console.log('cancel', pos.clientX, pos.clientY)

}
const dispatch = (type, properties) => {
  const ev = new Event(type)
  for (const key in properties) {
    ev[key] = properties[key]
  }
  el.dispatchEvent(ev)
} */

class Listener {
  constructor(el, recognizer) {
    let contexts = new Map()
    let isListenning = false
    //pc
    el.addEventListener('contextmenu', e => e.preventDefault())
    el.addEventListener('mousedown', e => {
      const context = Object.create(null)
      contexts.set('mouse' + (1 << e.button), context)
      recognizer.start(e, context)
      const mousemove = (ev) => {
        let button = 1
        while (button <= ev.buttons) {
          if (button & ev.buttons) {
            let key;
            if (button === 2) { //右键
              key = 4
            } else if (button === 4) {
              key = 2
            } else {
              key = button
            }
            const context = contexts.get('mouse' + key)
            recognizer.move(ev, context)
          }
          button = button << 1
        }

      }
      const up = (e) => {
        const context = contexts.get('mouse' + (1 << e.button))
        recognizer.end(e, context)
        contexts.delete('mouse' + (1 << e.button))
        if (e.buttons === 0) {
          document.removeEventListener('mousemove', mousemove)
          document.removeEventListener('mouseup', up)
          isListenning = false
        }
      }
      if (!isListenning) {
        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', up)
        isListenning = true
      }
    })
    //移动端手势
    el.addEventListener('touchstart', e => {
      for (const touch of e.changedTouches) {
        const context = Object.create(null)
        contexts.set(touch.identifier, context)
        recognizer.start(touch, context)
      }
    })
    el.addEventListener('touchmove', e => {
      for (const touch of e.changedTouches) {
        const context = contexts.get(touch.identifier)
        recognizer.move(touch, context)
      }
    })
    el.addEventListener('touchend', e => {
      for (const touch of e.changedTouches) {
        const context = contexts.get(touch.identifier)
        recognizer.end(touch, context)
        contexts.delete(touch.identifier)
      }
    })
    el.addEventListener('touchcancel', e => {
      for (const touch of e.changedTouches) {
        const context = contexts.get(touch.identifier)
        recognizer.cancel(touch, context)
        contexts.delete(touch.identifier)
      }
    })
  }
}
class Recognizer {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  start (pos, context) {
    context.startX = pos.clientX, context.startY = pos.clientY
    context.isPan = false, context.isTap = true, context.isPress = false
    context.points = [
      {
        t: Date.now(),
        x: pos.clientX,
        y: pos.clientY
      }
    ]
    context.handler = setTimeout(() => {
      console.log('press')
      this.dispatcher.dispatch('press', context)
      context.handler = null
      context.isPan = false, context.isTap = false, context.isPress = true
    }, 500)
  }
  move (pos, context) {
    // console.log('move', pos.clientX, pos.clientY)
    let dx = pos.clientX - context.startX
    let dy = pos.clientY - context.startY
    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {//移动距离大于10px，最好区分屏幕，这里dpx=2 设置10
      console.log('panstart')
      context.isVertical = Math.abs(dx) < Math.abs(dy)
      this.dispatcher.dispatch('panstart', {
        startX: context.startX,
        startY: context.startY,
        clientX: pos.clientX,
        clientY: pos.clientY,
        isVertical: context.isVertical
      })
      context.isPan = true, context.isTap = false, context.isPress = false
      clearTimeout(context.handler)
    }
    if (context.isPan) {
      console.log('pan')
      this.dispatcher.dispatch('pan', {
        startX: context.startX,
        startY: context.startY,
        clientX: pos.clientX,
        clientY: pos.clientY,
        isVertical: context.isVertical
      })
    }
    context.points = context.points.filter(v => Date.now() - v.t < 500)
    context.points.push({
      t: Date.now(),
      x: pos.clientX,
      y: pos.clientY
    })
  }
  end (pos, context) {
    if (context.isTap) {
      console.log('tap')
      this.dispatcher.dispatch('tap', {})
      clearTimeout(context.handler)
    }
    if (context.isPress) {
      console.log('pressEnd')
      this.dispatcher.dispatch('pressEnd', {})
    }
    context.points = context.points.filter(v => Date.now() - v.t < 500)
    let d, v;
    if (!context.points.length) {
      v = 0
    } else {
      console.log(context)
      d = Math.sqrt((pos.clientX - context.points[0].x) ** 2 + (pos.clientY - context.points[0].y) ** 2)
      v = d / (Date.now() - context.points[0].t)
    }
    console.log('v', v)
    if (v > 1.5) {
      context.isFlick = true
      console.log('flick')
      this.dispatcher.dispatch('flick', {
        startX: context.startX,
        startY: context.startY,
        clientX: pos.clientX,
        clientY: pos.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        speed: v
      })
    } else {
      context.isFlick = false
    }
    // console.log('end', pos.clientX, pos.clientY)
    if (context.isPan) {
      console.log('panEnd')
      this.dispatcher.dispatch('panEnd', {
        startX: context.startX,
        startY: context.startY,
        clientX: pos.clientX,
        clientY: pos.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick
      })
    }
  }
  cancel (pos, context) {
    clearTimeout(context.handler)
    this.dispatcher.dispatch('cancel', {})
    // console.log('cancel', pos.clientX, pos.clientY)

  }
}
class Dispatcher {
  constructor(el) {
    this.el = el
  }
  dispatch (type, properties) {
    const ev = new Event(type)
    for (const key in properties) {
      ev[key] = properties[key]
    }
    this.el.dispatchEvent(ev)
  }
}
const InitGesture = (el) => {
  return new Listener(el, new Recognizer(new Dispatcher(el)))
}
export {
  Dispatcher,
  Listener,
  Recognizer,
  InitGesture
}
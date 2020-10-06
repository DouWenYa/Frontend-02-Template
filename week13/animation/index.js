import { createElement } from './framework.js'
import { Carousel } from './carousel'
import { TimeLine, Animation } from './animation'
const imgs = [
  '../image/1.jpg',
  '../image/2.jpg',
  '../image/3.jpg',
  '../image/4.jpg',
  '../image/5.jpeg',
]
let a = <Carousel src={imgs} />
a.mountTo(document.body)
let T = new TimeLine()
T.add(new Animation({}, 'a', 0, 100, 1000, null))
T.start()

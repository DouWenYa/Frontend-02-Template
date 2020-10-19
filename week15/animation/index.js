import { createElement } from './libs/framework.js'
import { Carousel } from './carousel'
import { Button } from './Button'
import { List } from './List'
const imgs = [
  { src: '../image/1.jpg', url: 'https://es6.ruanyifeng.com/', name: 'es5' },
  { src: '../image/2.jpg', url: 'https://es6.ruanyifeng.com/', name: 'es6' },
  { src: '../image/3.jpg', url: 'https://es6.ruanyifeng.com/', name: 'es7' },
  { src: '../image/4.jpg', url: 'https://es6.ruanyifeng.com/', name: 'es8' },
  { src: '../image/5.jpeg', url: 'https://es6.ruanyifeng.com/', name: 'es9' }
]
// let a = <Carousel src={imgs}
//   onChange={(e) => console.log(e.detail.position)}
//   onClick={(e) => { window.location.assign(e.detail.data.url) }}
// />
let a = <List data={imgs}>
  {
    (record) =>
      <div>
        <img src={record.src} />
        <a href={record.url}>{record.name}</a>
      </div>
  }
</List>
a.mountTo(document.body)
// let T = new TimeLine()
// T.add(new Animation({}, 'a', 0, 100, 1000, null))
// T.start()

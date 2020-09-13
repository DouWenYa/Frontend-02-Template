 export default class Reactive {
   constructor() {
     this.callbacks = new Map();
     this.reactives = [];
     this.proxys = new Map();
   }

   // var obj = reactive({ a: { x: 1 }, b: 2 })
   // window.obj = obj //在浏览器调试用
   // effect(() => {
   //   console.log(obj.a.x)
   // })
   effect(fn) {
     this.reactives = [] //清空
     fn() //操作obj更改会触发proxy的相应方法
     for (const reactivity of this.reactives) {
       if (!this.callbacks.has(reactivity[0])) {
         this.callbacks.set(reactivity[0], new Map())
       }
       if (!this.callbacks.get(reactivity[0]).has(reactivity[1])) {
         this.callbacks.get(reactivity[0]).set(reactivity[1], [])
       }
       this.callbacks.get(reactivity[0]).get(reactivity[1]).push(fn)
     }
   }
   reactive(obj) {
     if (this.proxys.has(obj)) {
       return this.proxys.get(obj)
     }
     const _this = this;
     let proxy = new Proxy(obj, {
       get(obj, prop) {
         console.log('get', obj, prop)
         if (Object.prototype.toString.call(obj[prop]) === "[object Object]") {
           _this.reactive(obj[prop])
         }
         _this.reactives.push([obj, prop])
         return obj[prop]
       },
       set(obj, prop, val) {
         obj[prop] = val
         console.log('set', obj, prop)
         if (_this.callbacks.has(obj) && _this.callbacks.get(obj).has(prop)) {
           for (const fn of _this.callbacks.get(obj).get(prop)) {
             console.log('fn', fn)
             fn()
           }
         }
         return obj[prop]
       }
     })
     this.proxys.set(obj, proxy)
     return proxy
   }

 }
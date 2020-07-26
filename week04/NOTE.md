第四周浏览器原理（懵逼中~）
一、浏览器输入url后处理流程：
1、首先进行dns寻址，然后建立tcp通道，进行tls握手
2、通道建立起来后发送http或https协议，向服务端请求页面
3、把请求回来的html经过解析，构建dom树
4、计算dom树的css属性；
5、根据css属性对元素逐个进行渲染，得到内存中的位图；
6、对位图进行合成，最终绘制在页面
二、http协议格式
http=Request=>request line=>method
                           =>path
                           =>version
             =>head
             =>body
    =>Response=>request line=>method
                           =>path
                           =>version
             =>head
             =>body
三、http响应码
1xx：临时回应，客户端请继续
200：请求成功
3xx：请求的目标有变化，希望客户端进一步处理
   301,302永久性与临时性跳转
   304：没有更新过，取客户端缓存
4xx：客户端请求错误
  403：无权限
  404：页面不存在
5xx：服务端错误
   

const net = require("net")
///
//console.log(net)
class ResponseParser {
  constructor() {
    this.WAITING_STATUS_LINE = 0;
    this.WAITING_STATUS_END_LINE = 1;
    this.WAITING_HEADER_NAME = 2;
    this.WAITING_HEADER_SPACE = 3;
    this.WAITING_HEADER_VALUE = 4;
    this.WAITING_HEADER_LINE_END = 5;
    this.WAITING_HEADER_BLOCK_END = 6;
    this.WAITING_BODY = 7;
    this.current = this.WAITING_STATUS_LINE
    this.statusLine = ''
    this.headers = {}
    this.headerName = '';
    this.headerValue = '';
    this.bodyParser = null;
  }
  receiver(str) {
    for (let i = 0; i < str.length; i++) {
      this.receiveChar(str.charAt(i))
    }
  }
  receiveChar(char) {
    if (this.current === this.WAITING_STATUS_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_STATUS_END_LINE
      } else {
        this.statusLine += char
      }
    } else if (this.current === this.WAITING_STATUS_END_LINE) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER_NAME
      }
    } else if (this.current === this.WAITING_HEADER_NAME) {
      if (char === ':') {
        this.current = this.WAITING_HEADER_SPACE
      } else if (char === '\r') {
        this.current = this.WAITING_HEADER_BLOCK_END
      } else {
        this.headerName += char
      }
    } else if (this.current === this.WAITING_HEADER_SPACE) {
      if (char === ' ') {
        this.current = this.WAITING_HEADER_VALUE
      }
    } else if (this.current === this.WAITING_HEADER_VALUE) {
      if (char === '\r') {
        this.current = this.WAITING_HEADER_LINE_END;
        this.headers[headerName] = this.headerValue;
        this.headerValue = '';
        this.headerName = '';
        console.log(this.headers)
      } else {
        this.headerValue += char
      }
    } else if (this.current === this.WAITING_HEADER_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER_NAME
      }
    } else if (this.current === this.WAITING_HEADER_BLOCK_END) {
      if (char === '\n') {
        this.current = this.WAITING_BODY
      }
    } else if (this.current === this.WAITING_BODY) {
      console.log(char)
    }
  }
}
class Request {
  constructor(opts) {
    this.method = opts.method || 'POST';
    this.port = opts.port || '8088';
    this.path = opts.path || '/';
    this.host = opts.host;
    this.headers = opts.headers || {};
    this.body = opts.body || {};
    if (!this.headers['content-type']) {
      this.headers['content-type'] = 'application/x-www-form-urlencoded'
    }
    if (this.headers['content-type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join("&")
    } else if (this.headers['content-type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body)
    }
    this.headers['content-length'] = this.bodyText.length;
  }
  toString() {
    // console.log(this.headers)
    return `${this.method}${this.path}HTTP/1.1\r\n${Object.keys(this.headers).map(key=>`${key}:${this.headers[key]}`).join("\r\n")}\r\n${this.bodyText}\r\n`
  }
  send(connection) { //connection 是否已建立tcp链接
    return new Promise((resolve, reject) => {
      const parser = new ResponseParser;
      if (connection) {
        connection.write(this.toString())
      } else {
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          console.log('toString:', this.toString())
          connection.write(this.toString())
        });
      }
      connection.on('data', (data) => {
        console.log('data', data);
        parser.receiver(this.toString())
        if (parser.isFinished) { //已经发送完毕
          resolve(parser.response);
          connection.end() //结束发送
        }
      })
      connection.on("error", (error) => {
        console.log(error)
        reject(error);
        connection.end() //结束发送
      })
    })
  }
}
void async function () {
  const request = new Request({
    method: 'POST',
    host: '127.0.0.1',
    path: '/',
    port: '8088',
    headers: {
      ['X-Foo2']: 'customed'
    },
    body: {
      name: "haha",
    }
  })
  let response = await request.send();
  console.log('response', response)
}()
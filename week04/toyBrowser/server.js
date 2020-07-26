const http = require("http")
http.createServer(
  (req, res) => {
    let body = [];
    req.on('error', (e) => {
      console.error(e)
    }).on("data", (data) => {
      body.push(data.toString())
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log("body", body)
      res.writeHead(200, {
        'content-Type': 'application/x-www-form-urlencoded'
      })
      res.end("hello toyBrowser")
    })
  }
).listen(8088)

console.log('server is start')
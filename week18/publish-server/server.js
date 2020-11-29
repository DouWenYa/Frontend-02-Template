const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  console.log(req.headers)
  const outFile = fs.createWriteStream("../server/public/index.html")
  req.on('data', chunk => {
    outFile.write(chunk)
  })
  req.on('end', () => {
    outFile.end()
    res.end('server Success')
  })

}).listen('8020')
const http = require('http')
const fs = require('fs')
const file = fs.createReadStream('./sample.html')

const request = http.request({
  hostname: '127.0.0.1',
  port: 8020,
  method: 'POST',
  headers: {
    contentType: "application/octet-stream"
  }
}, (respose) => {
  // console.log(respose)
})
file.on('data', chunk => {
  console.log(chunk.toString())
  request.write(chunk)
})
file.on('end', chunk => {
  console.log('chunk end')
  request.end(chunk)
})
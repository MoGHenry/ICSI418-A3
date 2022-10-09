const express = require('express')
const app = express()
const port = 3000
const http = require('http')

app.use(express.json())
app.use(express.static("public"))

const server = http.createServer(app)


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()

app.get('/', (request, response) => {
  let date = new Date()
  response.send(`Today's date is ${date}`)
})

app.get('/page', (request, response) => {
  response.sendfile('./page.html', {root: __dirname})
})

app.listen(3000)

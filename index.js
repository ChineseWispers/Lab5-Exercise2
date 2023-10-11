const express = require('express')
const app = express()
const calculatorRoutes = require('./routes/calculatorRoutes');
const port = 3000

app.use('/calculator', calculatorRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


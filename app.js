const express = require('express')
const webRoutes = require('./web/routes')
const app = express()
const port = process.env.PORT || 4002

app.use('/', express.static('public'))


app.use('/', webRoutes)

app.listen(port, () => console.log('we got you on' + ' ' + port))

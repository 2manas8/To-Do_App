require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/database')

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())

const routes = require('./routes/route')
app.use('/api/v1', routes)
app.listen(port, () => {
    console.log('Server is running at port ' + port)
})

dbConnect()

app.get('/', (req, res) => {
    res.send(`Backend is running`);
});
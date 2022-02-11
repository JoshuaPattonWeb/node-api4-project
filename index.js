require('dotenv').config()
const express = require('express')
const cors = require('cors')
const web = express()
const PORT = process.env.PORT || 9000

web.use(express.json())
web.use(cors())

web.get('/api/test', (req, res) => {
    res.json({ message: 'hello everyone viewing!'})
})

web.use('*', (req, res, next) => {
    res.send({ message: 'hello there everyone!' })
})

web.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
})

web.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
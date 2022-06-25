const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, 'front', 'dist')

console.log(publicPath)

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.all('*', (req, res, next) => {
    next(new AppError(`The requested URL ${req.originalUrl} could not be found`, 404))
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

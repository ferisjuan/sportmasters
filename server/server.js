const path = require('path')
const express = require('express')
const helmet = require('helmet')
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

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            //  "default-src" used as fallback for any undeclared directives
            'default-src': ["'self'"],
            // i am using stripe api. if you have any script add it here
            'script-src': ["'self'", "'unsafe-inline'", 'js.stripe.com'],
            // external css link here
            'style-src': ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
            'frame-src': ["'self'", 'js.stripe.com'],
            'font-src': ["'self'", 'fonts.googleapis.com', 'fonts.gstatic.com', 'res.cloudinary.com/'],
            'img-src': ["'self'", 'data:', 'https://res.cloudinary.com'],
        },
        reportOnly: true,
    }),
)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

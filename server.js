//everything is from top to bottoms

const express = require('express')
const app = express()

//built-in middleware
app.use(express.static("public")) //serve all static files
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(logger) //can use middleware for every function

app.get('/', logger, (req, res) => { // can use middleware for one thing only

})

const userRouter = require('./routes/users')

app.use("/users", userRouter)

//user made middleware
function logger( req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)


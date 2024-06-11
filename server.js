//everything is from top to bottoms

const express = require('express')
const app = express()

//built-in middleware
// app.use(express.static("public")) //serve all static files
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(logger) //can use middleware for every function
app.use(loggingMiddleware) //middlware is used by every function here


app.get('/', logger, (req, res) => { // can use middleware for one thing only
    res.send("Home page")
})

const userRouter = require('./routes/users')

app.use("/users", userRouter)

//user made middleware
function logger( req, res, next){
    console.log(`inside logger: ${req.originalUrl}`)
    next()
}

function loggingMiddleware(req, res, next) {
    console.log(`inside loggingMiddleWare:  ${new Date().toISOString()}: ${req.originalUrl}`)
    next()
}

// function authorizeUsersAccess(req, res, next){
//     console.log("authorize user access Middleware")
//     next()
// }

app.listen(3000, () => console.log("Server Started"))


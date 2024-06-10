const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send("Users List")
})

router.get("/new", (req, res) => {
    res.render("users/new", { firstname: "Test" })
})


//by default wwe cannot access body 
//we have to use middleware in order to access body
router.post("/", (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({ firstname : req.body.firstname })
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log("Error")
        res.render("users/new", { firstname: req.body.firstname })
    }
    res.send("Hi")
})

// router.get("/:id", (req, res) => {
//     res.send(`Users id: ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     res.send(`Update Users id: ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
//     res.send(`Delete Users id: ${req.params.id}`)
// })
//same as below
//get,put and delete are like the same

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`users id ${req.params.id}`)
    })
    .put((req,res) => {
        res.send(`update users is ${req.params.id}`)
    })
    .delete((req,res) => {
        res.send(`delete users id ${req.params.id}`)
    })  


//whenever it finds param it will run the code in this code it is "id"
//if we will not give next then the site will load for infinite

//param is middleware here
//it will run before above code

const users = [{ name : "Divyansh" }, { name : "Dhyani" }]
router.param("id" , (req, res, next, id) => {
    req.user = users[id]
    next()
})


module.exports = router

//express js read code from top to bottom keep in mind while
//decalring dynamic routes as here if we keep /:id above /new
//it will create rucus
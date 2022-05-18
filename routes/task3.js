const router = require('express').Router()
const db = require('../db')

router.delete('/delete', (req,res)=>{
    const {usernames} = req.body
    queryArray = Array(usernames.length).fill('(?)')

    db.query("delete from user_details where username in (?)", [usernames], (err,result)=>{
        if(err) console.log(err)
        res.status(201).send('successfully deleted')
    })
})

module.exports = router
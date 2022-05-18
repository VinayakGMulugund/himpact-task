const express = require('express')
const db = require('../db')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.post('/login', async (req,res)=>{
    const { username, password } = req.body
    db.query('select * from user_details where username=?', username, async (err,result)=>{
        if(err) return console.log(err)
        const user = result[0]
        if(!user) return res.status(400).send('no user found')
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(401).send('wrong password')
        
        const token = jwt.sign({userId: user.user_id}, 'jwtSecret')
        res.status(200).send(token)

    })
})

module.exports = router
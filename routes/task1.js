const express = require('express')
const db = require('../db')
const router = express.Router()

const bcrypt = require('bcrypt')

const {randomUUID} = require('crypto')



//make new user 
router.post('/', async (req,res)=>{
    const {password, ...others} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const data = {password: hashedPassword, ...others, user_id: randomUUID()}
    db.query('insert into user_details set ?', data, (err, result)=>{
        if(err) res.status(500).send(err)
        else res.status(201).send('data inserted')
    })
})

//get all users
router.get('/', async (req,res) => {
    db.query('select * from user_details', (err,result)=>{
        if(err) console.log(err)
        else res.status(200).json(result)
    })
})

module.exports = router
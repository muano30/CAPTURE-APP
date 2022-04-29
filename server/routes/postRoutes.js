const express = require("express")
const app = express()
const postSchema = require("../models/postShema")


app.get('/', async (req,res)=>{
    try {
        const posts = await postSchema.find();
        res.json(posts)
    } catch (error) {
        res.json({message: error})
    } 
    });


    app.post('/post', (req, res) => {
    
        const post = new postSchema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            grade: req.body.grade,
    
        })
    
        post.save()
            .then(data => { res.json(data) })
    
            .catch(err => {
                res.json({ message: err })
            })
    })

    module.exports = app

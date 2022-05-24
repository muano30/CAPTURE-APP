const postShema = require('../models/postShema')


const saveDetails = (app) => {
    app.post('/save_details' , async (req , res) => {
        let {firstname , lastname , dateofbirth , grade} = req.body

try {
    let post = new postShema ({
        firstname , lastname , dateofbirth , grade
    })
    const postSaved = await post.save() 
    
    res.send({message:"Details succesfully saved", postSaved})
} catch (error) {
    console.error("post error",error)
    res.send({message:"post error"}).status(401)
}

    })

    app.get('/get_details' , async (req , res) => {

        try {
            const findDetails = await postShema.find()
            res.send(findDetails)
                    } catch (error) {
            console.log('error', error)
        }
    })
}

module.exports = {saveDetails}
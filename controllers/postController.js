////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const Theme = require("../models/themes")

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// POST
// only loggedIn users can post 
router.post("/:themeId", (req, res) => {
    const themeId = req.params.themeId

    if (req.session.loggedIn) {
        // we want to adjust req.body so that the author is automatically assigned
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }
    // find a specific theme
    Theme.findById(themeId)
        // do something if it works
        //  --> send a success response status a 
        .then(theme => {
           
            theme.posts.push(req.body)
            
            return theme.save()
        })
        .then(theme => {
            res.status(200).json({ theme: theme })
        })
        // do something else if it doesn't work
        //  --> send some kind of error depending on what went wrong
        .catch(error => console.log(error))
})

// DELETE
// only the author of the post can delete it
router.delete('/delete/:themeId/:postId', (req, res) => {
    // isolate the ids and save to vars for easy ref
    const themeId = req.params.themeId 
    const postId = req.params.postId
    
    Theme.findById(themeId)
        .then(theme => {
            // get the post
            const thePost = theme.posts.id(postId)
	
            console.log('this is the post that was found', thePost)
            // make sure the user is logged in
            if (req.session.loggedIn) {
                // only let the author of the post delete it
                if (thePost.author == req.session.userId) {
        
                    thePost.remove()
                    theme.save()
                    res.sendStatus(204)

                } else {
                    res.sendStatus(401)
                }
            } else {
                res.sendStatus(401)
            }
        })
        // send an error if error
        .catch(error => console.log(error))

})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router
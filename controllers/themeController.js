// Import Dependencies
const express = require('express')
const Theme = require('../models/themes')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware
// If you have some resources that should be accessible to everyone regardless of loggedIn status, this middleware can be moved, commented out, or deleted. 


// Routes

// index ALL
router.get('/', (req, res) => {
	Theme.find({})
	.populate("posts.author", "username")
		.then(themes => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId
			
			res.render('themes/index', { themes, username, loggedIn, userId })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})
// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
	res.render('themes/new', { username, loggedIn, userId })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	

	req.body.owner = req.session.userId
	Theme.create(req.body)
		.then(theme => {
			const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
			console.log('this was returned from create', theme)
			res.redirect('/themes')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's themes
router.get('/mine', (req, res) => {
  
    Theme.find({ owner: req.session.userId })
  
        .then(themes => {
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId

            
            res.render('themes/index', { themes, username, loggedIn, userId })
        })
    
        .catch(err => res.redirect(`/error?error=${err}`))
})




// edit route -> GET that takes us to the edit form view
router.get("/edit/:id", (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId

    const themeId = req.params.id

    Theme.findById(themeId)
        
        .then(theme => {
            res.render('themes/edit', { theme, username, loggedIn, userId })
        })
        // redirect if there isn't
        .catch(err => {
            res.redirect(`/error?error=${err}`)
        })
    // res.send('edit page')
})

// update route
router.put("/:id", (req, res) => {
    console.log("req.body initially", req.body)
    const id = req.params.id

  
    
   Theme.findById(id)
        .then(themes => {
            if (themes.owner == req.session.userId) {
                // must return the results of this query
                return themes.updateOne(req.body)
            } else {
                res.sendStatus(401)
            }
        })
        .then(() => {
            // console.log('returned from update promise', data)
            res.redirect(`/themes/${id}`)
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})

// show route
router.get('/:id', (req, res) => {
	const id = req.params.id
	Theme.findById(id)
	.populate("posts.author", "username")
		.then(theme => {
			const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
			res.render('themes/show', { theme, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

router.delete('/:id', (req, res) => {
  
    const themeId = req.params.id

    // delete and REDIRECT
    Theme.findByIdAndRemove(themeId)
        .then(themes => {
            
            // if the delete is successful, send the user back to the index page
            res.redirect('/themes')
        })
        .catch(err => {
            
            res.redirect(`/error?error=${err}`)

        })

})

// Export the Router
module.exports = router

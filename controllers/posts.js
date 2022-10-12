// Import Dependencies
const express = require('express')
const Post = require('../models/themes')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware
// If you have some resources that should be accessible to everyone regardless of loggedIn status, this middleware can be moved, commented out, or deleted. 
router.use((req, res, next) => {
	// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})

// Routes

// index ALL
router.get('/', (req, res) => {
	Post.find({})
		.then(themes => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			
			res.render('themes/index', { themes, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's posts
router.get('/mine', (req, res) => {
    // destructure user info from req.session
    const { username, userId, loggedIn } = req.session
	Post.find({ owner: userId })
		.then(posts => {
			res.render('posts/index', { posts, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('posts/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	req.body.ready = req.body.ready === 'on' ? true : false

	req.body.owner = req.session.userId
	Post.create(req.body)
		.then(post => {
			console.log('this was returned from create', post)
			res.redirect('/posts')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const postId = req.params.id
	Post.findById(postId)
		.then(post => {
			res.render('posts/edit', { post })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route
router.put('/:id', (req, res) => {
	const postId = req.params.id
	req.body.ready = req.body.ready === 'on' ? true : false

	Post.findByIdAndUpdate(postId, req.body, { new: true })
		.then(post => {
			res.redirect(`/posts/${post.id}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	const postId = req.params.id
	Post.findById(postId)
		.then(post => {
            const {username, loggedIn, userId} = req.session
			res.render('posts/show', { post, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete route
router.delete('/:id', (req, res) => {
	console.log('this is working')
	const postId = req.params.id
	Post.findByIdAndRemove(postId)
		.then(post => {
			res.redirect('/posts')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router

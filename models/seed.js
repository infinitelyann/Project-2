///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const Themes = require('./themes')

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////
// save the connection in a variable
const db = mongoose.connection
console.log('db in seed', db)
db.on('open', () => {
	// array of starter fruits
	const startThemes = [
		{ name: 'Orange', color: 'orange', readyToEat: false },
		{ name: 'Grape', color: 'purple', readyToEat: false },
		{ name: 'Banana', color: 'orange', readyToEat: false },
		{ name: 'Strawberry', color: 'red', readyToEat: false },
		{ name: 'Coconut', color: 'brown', readyToEat: false },
	]

	// when we seed data, there are a few steps involved
	// delete all the data that already exists(will only happen if data exists)
	Themes.remove({})
        .then(deletedThemes => {
		    console.log('this is what remove returns', deletedThemess)
		    // then we create with our seed data
            Themes.create(startThemess)
                .then((data) => {
                    console.log('Here are the new seed fruits', data)
                    db.close()
                })
                .catch(error => {
                    console.log(error)
                    db.close()
                })
	    })
        .catch(error => {
            console.log(error)
            db.close()
        })
})
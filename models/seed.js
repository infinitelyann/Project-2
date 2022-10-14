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
	
	// const startThemes = [
	// 	{ title:"shades of purple" , backgroundColor: , foregroundColor: , textColor: },
	// 	{ title:"tropical sunshine" , backgroundColor: , foregroundColor: , textColor: },
	// 	{ title:"forrest" , backgroundColor: , foregroundColor: , textColor: },
	// 	{ title:"greyscale" , backgroundColor: , foregroundColor: , textColor: },
	// 	{ title:"neon" , backgroundColor: , foregroundColor: , textColor: },
	// ]

	// when we seed data, there are a few steps involved
	// delete all the data that already exists(will only happen if data exists)
	Themes.remove({})
        .then(deletedThemes => {
		    console.log('this is what remove returns', deletedThemes)
		    // then we create with our seed data
            Themes.create(startThemes)
                .then((data) => {
                    console.log('Here are the new seed themes', data)
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
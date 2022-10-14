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
	// 	{ title:"shades of purple" , backgroundColor:'#251B37' , foregroundColor:#FFECEF , textColor:#372948 },
	// 	{ title:"tropical sunshine" , backgroundColor:'#F48B29' , foregroundColor:"#374316"; , textColor: #AC0D0D },
	// 	{ title:"forrest" , backgroundColor:#3F4E4F , foregroundColor:#809A6F , textColor:#00303F , },
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
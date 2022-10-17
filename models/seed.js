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
	
	const startThemes = [
		{ title:"shades of purple" , backgroundColor:"#251B37" , foregroundColor:"#FFECEF" , textColor:"#372948", image:"https://i.imgur.com/J5MNnff.jpg"},
		{ title:"tropical sunshine" , backgroundColor:"#F48B29" , foregroundColor:"#374316", textColor: "#AC0D0D", image:"https://i.imgur.com/Cfk0Xpr.jpg" },
		{ title:"forrest" , backgroundColor:"#3F4E4F" , foregroundColor:"#809A6F" , textColor:"#00303F", image:"https://i.imgur.com/mfCkfvf.jpg"},
		{ title:"greyscale" , backgroundColor:"#171717" , foregroundColor:"#444444" , textColor:"#FAF3F3", image:"https://i.imgur.com/H0eIy5L.jpg"},
		{ title:"neon", backgroundColor:"#4700D8" , foregroundColor:"#D800A6 ", textColor:"#9900F0", image:"https://i.imgur.com/JvFVvQw.jpg"},
        { title:"angst", backgroundColor:"#151515" , foregroundColor:"#B4A5A5" , textColor:"#301B3F", image:"https://i.imgur.com/cGLSL4z.jpg" },
        { title:"ocean", backgroundColor:"#1A374D" , foregroundColor:"#406882" , textColor:"#D4ECDD", image:"https://i.imgur.com/cQKxgE0.jpg" },
        { title:"floral", backgroundColor:"#98DDCA" , foregroundColor:"#FFAAA7" , textColor:"#184D47", image:"https://i.imgur.com/OvKN0he.jpg"},
        { title:"stormy", backgroundColor:"#334257" , foregroundColor:"#548CA8" , textColor:"#EEEEEE", image:"https://i.imgur.com/mzOyRAk.jpg" },
        { title:"angsty night-time", backgroundColor:"#4C6793" , foregroundColor:"#000000" , textColor:"#c01813", image:"https://i.imgur.com/c5c41nr.jpg" }
	]

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
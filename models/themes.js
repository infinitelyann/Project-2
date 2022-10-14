// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')
const postSchema = require('./post')


// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const themeSchema = new Schema(
	{
		title: { type: String, required: true },
		backgroundColor: { type: String, required: true },
        foregroundColor: { type: String, required: true },
		image: {type: String, required: true },
		textColor: { type: String, required: true },
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',
		},
		posts: [postSchema]
	},
	{ timestamps: true }
)

const Theme = model('Theme', themeSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Theme

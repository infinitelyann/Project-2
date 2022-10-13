///////////////////////////////////////////////////////////
// Import Dependencies
///////////////////////////////////////////////////////////

const mongoose = require('./connection')

const { Schema } = mongoose

const postSchema = new Schema({
    note: {
        type: String, 
        required: true
    }, 
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    }
},{
    timestamps: true
})
///////////////////////////////////////////////////////////
// Export our schema
///////////////////////////////////////////////////////////
module.exports = postSchema
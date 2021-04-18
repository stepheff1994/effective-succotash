
const mongoose = require('mongoose');

const thoughtSchema = mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "User"
    },

    thoughtText: {
        type: String, 
        required: true,
        maxLength: 280,
        createdAt: new Date(),
       
    }


},{
    timestamps: true,
});

// thoughtText

// String
// Required
// Must be between 1 and 280 characters
// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// username (The user that created this thought)

// String
// Required
// reactions (These are like replies)

// Array of nested documents created with the reactionSchema
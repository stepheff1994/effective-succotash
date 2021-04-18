const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String, 
        unique: true,
        required: true,
        trim: true
    },

    email: {
        type: String, 
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }


});

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const User = mongoose.model("User", userSchema);

module.exports = User


// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)


const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    regUserInput : {
        type : String , 
        required: false},
    email: {
        type: String,
        required : false,
        unique :true
    },
    regPwInput : {
        type : String,
        required : false
    },
    position : {
        type : String,
        required : false
    },
    assistanceOffered :{
        type : String,
        required : false
    },
})

const User = mongoose.model('User', userSchema, )

module.exports = User;


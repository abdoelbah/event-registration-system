const mongoose =require('mongoose')
const schema = mongoose.Schema
const user = new schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    }
})

const attendorModel = mongoose.model('Attendors',user)

module.exports = attendorModel
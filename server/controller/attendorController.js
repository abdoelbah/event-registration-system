const attendorModel = require('../model/attendorModel')
const {sendEmailTicket} = require('../utils/mailer')
exports.Register = async (req, res) => {

    try {
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const email = req.body.email


        if(!firstname || !lastname ||!email){
            res.json({
                msg:"invaled data or empty feilds"
            })
            return
        }

        const attendor =await attendorModel.findOne({email})
        if(attendor){
            res.json({
                msg:"this user is already registered"
            })
            return
        }



        const newAttendor = await attendorModel.create({
            firstname,
            lastname,
            email
        })
        if(newAttendor){
            res.json({
                msg:"Attendor registered"
            })
        //       sendEmailTicket(firstname,email)
        }


        
    } catch (error) {
    console.log(error.message)
    }




}
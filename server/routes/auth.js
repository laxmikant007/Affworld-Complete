const router = require('express').Router();
const {User} = require("../model/user");
const Joi = require("joi");
const bcrypt = require('bcrypt');


// router.get("/", async(req, res)=>{

//     res.send("All Affworld auth users working...")    
// })

router.post("/", async(req,res)=>{

    console.log("req.body is -->", req.body)
    try {
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        if(!user)
            return res.status(401).send({message:"Invalid Email or Password!!"});

        const validPassword = await bcrypt.compare(
            req.body.password , user.password
        )

        if(!validPassword)
             return res.status(401).send({message:"Invalid Email or Password!!"});

         const token = user.generateAuthToken();
            //res.send(token);
            console.log("token is -->", token)
         console.log("user is -->", user)
         res.status(200).send({user, token:token ,message:"Logged In Successfully!!"})

        
    } catch (error) {
        // res.status(500).send({message:"Inter Server Error"});
        res.status(500).send({error:error.message});
        console.log("error is -->", error)
    }



})

const validate = (data)=>{
    const schema = Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password")

    });

    return schema.validate(data);
}






module.exports = router;

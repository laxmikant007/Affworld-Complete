const router = require('express').Router();
const {User, validate} = require("../model/user");
const bcrypt = require('bcrypt');

router.get("/", async(req, res)=>{

    res.send("All Affworld users working...")    
})

router.post("/", async(req, res)=>{

    try {
        const {error} = validate(req.body);
        if(error) 
            return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        if(user)
            return res.status(409).send({message:"User Already Existed!!"})

        const salt =await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword= await bcrypt.hash(req.body.password, salt);

        await new User({...req.body , password:hashPassword}).save();
        res.status(201).send({message:"User Created Successfully!!"})

        
    } catch (error) {
        // res.status(500).send({message:"Internal server error:", error});
        // res.status(500).send({message:"Inter Server Error"});
        res.status(500).send({error:error.message});
        console.log("error is -->", error)
        
    }

})






module.exports = router;
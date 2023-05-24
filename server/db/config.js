const mongoose=require('mongoose')

module.exports = ()=>{
    const connectionParams  = {
        useNewUrlParser: true,
        useUnifiedTopology : true
       
    };

    try {
        mongoose.set('strictQuery', true); 
        mongoose.connect(process.env.DB ,connectionParams);
        console.log("Connected to Affworld database Successfully!!")
        
    } catch (error) {
        console.log(error);
        console.log("could not connect db:(");
    }


}


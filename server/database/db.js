import mongoose from "mongoose"


mongoose.set('strictQuery', true)
const connection= async (username,password)=>{

    const URL= `mongodb://ravi:bhumihar1@ac-vxifwyq-shard-00-00.tx5koj6.mongodb.net:27017,ac-vxifwyq-shard-00-01.tx5koj6.mongodb.net:27017,ac-vxifwyq-shard-00-02.tx5koj6.mongodb.net:27017/?ssl=true&replicaSet=atlas-wv4a4x-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
     await mongoose.connect(URL,{useUnifiedTopology: true ,useNewUrlParser:true});
     console.log('Database connected successfully');
    }
    catch(error)
    {
        console.log('error while connecting with database', error);
    }
}

export default connection;
import mongoose from 'mongoose';

 const Connection = () => {
    
    const MONGO_URI = 'mongodb+srv://rohansethi1999430:3iM34bnEwahKiAtN@mern-todo.lplacqc.mongodb.net/?retryWrites=true&w=majority'
    
    mongoose.connect(MONGO_URI,{ useNewUrlParser:true });

    mongoose.connection.on('connected',() =>{
        console.log('Database connected successfully')
    })

    mongoose.connection.on('disconnected',() => {
        console.log('Database Disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('Error while connecting to the database : ',error.message);
    })

}

export default Connection;
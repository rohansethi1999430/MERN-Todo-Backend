import express from 'express';


const  app = express();

const PORT = 8000;

app.listen(PORT,()=>console.log(`Node server is running on Port ${PORT}`));
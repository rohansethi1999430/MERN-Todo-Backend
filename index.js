import express from 'express';

import Connections from './database/db.js';

const  app = express();

const PORT = 9000;

Connections();

app.listen(PORT,()=>console.log(`Node server is running on Port ${PORT}`));
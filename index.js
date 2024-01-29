// import express from 'express';
// import cors from 'cors'
// import router from './routes/routes.js'
// import DBConnection from './database/db.js';
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use('/',router)
// const port = process.env.PORT || 8000;
// DBConnection();
// app.get('/',(req,res)=>{
// console.log(__dirname)
// app.use(express.static(path.resolve(__dirname,"client","build")));
// res.sendFile(path.resolve(__dirname,"client","build","index.html"));
// });
// app.listen(port,()=>console.log(`Server is running on Port ${port}`))

import express from 'express';
import cors from 'cors';
// import router from './routes/routes.js';
// import DBConnection from './database/db.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__dirname, "/var/task/client/build/")));

// app.use('/', router);

const port = process.env.PORT || 8000;
// DBConnection();
// console.log("default directory name:")
console.log(join(__dirname, "var/task/client/build"));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'client/build', 'index.html'));
// res.status(200).json({
//     "message": " app is running"
// })
});

app.listen(port, () => console.log(`Server is running on Port ${port}`));

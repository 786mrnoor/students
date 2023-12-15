const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const studentRouter = require('./routes/student');

const server = express();
//pass uLWkOplEee3xWwcP
//db connection
console.log(process.env.DB_URL);
main()

async function main() {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('database connected');
    }
    catch(err){
        console.log('err\n', err);
    }
}

server.use(express.json());
server.use(cors());
server.use('/students', studentRouter.router);
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})




server.listen(8090, ()=>{
    console.log('server started PORT 8090');
})
// const express = require('express')
// const sql = require('mssql')
// const app = express();
// const port = 3000;
// const sqlConfig = {
//     server: '172.187.184.173',
//     databse: 'GazeDB',
//     user:'sa',
//     password: 'Cheesecake!1',
//     pool:{
//         min:0,
//         max:10,
//         idleTimeoutMillis:30000
//     },
//     options:{
//         encrypt: false,
//         trustServerCertificate: true
//     }

// }
// app.get('/',(req,res) =>{
//     res.send('default route found')
// })

// app.get('/watch,',(req,res)=>{
//     res.send('play video');
// })

// app.get('/watch/:videoID',(req,res)=>{
//     const videoID = req.params.videoID
//     res.send(videoID + "=" + eval(videoID))
// })
// app.listen(port,()=>{
//     console.log('Service is listeting.')
// })

// app.get('/countires/:countryCode',async(req,res)=>{

//     const countryCode = req.params.countryCode
//     var request = new sql.Request()
//     request.input('country_Id',sql.VarChar,countryCode)
//     const query =`
//     SELECT * 
//     FROM countries
//     WHERE country_id = @country_id;
// `;
//     const result = await request.query(query)
//     res.json(result);

// })

// app.get('/employees',(req,res) =>{
    
//     const num1 = req.query.num1
//     const num2 = req.query.num2
//     res.send(`${num1} x ${num2} = ${num1 * num2}`)
// })

// app.get('/coutries', async (req,res) =>{
//     await sql.connect(sqlConfig);
//     var request = new sql.Request();
//     request.input('')
//     const query =`
//     SELECT * 
//     FROM countries
//     WHERE country_id = @country_id;
//     `

// })

// app.post('/books', async (req,res)=>{
   
//     const bookName = req.body.bookName;local
//     const author = req.body.author;local
//     const publicationDate = req.body.publicationDate;local
//     const isbn = req.body.isbn;local
//     const avaiable = req.body.avaiable;local

//     await sql.connect(sqlConfig)
//     var request = new sql.Request()

//     res.send('Post books')
// })



const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;
const sqlConfig = {
    server: '172.187.184.173',
    database: 'SebastianDB',
    user: 'sa',
    password: 'Cheesecake!1',
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

app.use(express.json()); 

app.get('/storage', async (req, res) => {
    try {
        await sql.connect(sqlConfig);
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM storage');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/check/:password', async (req, res) => {
    try {
        const { password } = req.params;
        await sql.connect(sqlConfig);
        const request = new sql.Request();
        request.input('password', sql.VarChar, password);
        const result = await request.query('SELECT * FROM account WHERE password = @password');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/buy/:itemId', async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const { quantity } = req.body;

        // Here you would write the logic to update the quantity in the database for the specified item

        // For demonstration purposes, let's just send a success message
        res.send(`Bought ${quantity} items with item ID ${itemId}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


// const { log } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const BookModel = require("../models/bookModel");


router.get("/init", async (request, response) => {

    const books = await BookModel.find();
console.log(books);
     fs.readFile('./dal/books.json', 'utf8', (err, data)=> {
        if(err) {
            console.error(err);
            return;
        }
        
        response.json(JSON.parse(data)); 
    });
    
});

module.exports = router;




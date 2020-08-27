const http = require("http");
const request = require("request");
const url = require("url");

const HTMLAudibleData  =  require("./includes/HTMLAudibleData")
const ad = new HTMLAudibleData()
//create a server object:
http
  .createServer(async (req, res) =>{
    const { book } = url.parse(req.url, true).query
    if(book){
        const book_data = await ad.getBookData(book)
        res.write(JSON.stringify({book_data}))
    }
    res.end()
  })
  .listen(8080); //the server object listens on port 8080

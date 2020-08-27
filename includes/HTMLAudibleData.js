const request = require("request");
const url = require("url");
const HTMLParser = require("node-html-parser")
module.exports = class HTMLAudibleData{
    constructor(){
        this.base = `https://www.audible.com/`
    }
    async getBookData(book){
        const url = `${this.base}search?keywords=${book}`
        console.log(url)
        const pageData =  await this.getSearchPageData(url)
        const document = HTMLParser.parse(pageData)
        const bookItem = HTMLParser.parse(document.querySelector(".bc-list-item.productListItem").innerHTML)
    
        const bookName = bookItem.querySelector(".bc-heading.bc-color-base.bc-text-bold").innerHTML
      
        return bookName
}
    async getSearchPageData(uri){
        return new Promise((resolve,reject)=>{
            request(
                { uri },async (error, response, body) =>{
                    if(error){
                        reject(error)
                        return
                    }
                    if(response){
                    resolve(body)
                }
                }
            )
        } )    
    }    
}
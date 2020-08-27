const request = require("request");
const HTMLParser = require("htmlparser")

module.exports = class HTMLGrab{
    static getDefaultHeaders(){
        return {}
    }
    static parseHTML(html){
        return HTMLParser.parse(html)
    }
}
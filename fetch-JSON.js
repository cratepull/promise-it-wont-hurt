var http = require("q-io/http");

http.read('http://localhost:1337').then(function (content) {
    console.log(JSON.parse(content))
})
var fs = require("fs");
var ms = require("ms");
var m = require("micromark");

var doc = fs.readFileSync("markdown.md");

var start = Date.now();
var x = m(doc);
console.log("mm:time:", ms(Date.now() - start));

if (typeof document !== "undefined") document.body.innerHTML = x;

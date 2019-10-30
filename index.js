const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

// set default variables (filePath)
const [filePath = path.join(__dirname, "input.txt")] = process.argv.slice(2);

const stream = fs
    .createReadStream(filePath)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(filePath + ".gz"));

stream.on("close", () => console.log("File compressed"));
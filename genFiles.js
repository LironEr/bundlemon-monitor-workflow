const fs = require("node:fs");
const crypto = require("node:crypto");

function generateFileWithRandomString(fileName, sizeKb) {
  fs.writeFileSync(`./files/${fileName}`, crypto.randomBytes(sizeKb * 1024));

  console.log(`Wrote ${fileName}, ${sizeKb} KB`);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

generateFileWithRandomString("main.bin", generateRandomNumber(5, 10));
generateFileWithRandomString("a.txt", 3);
generateFileWithRandomString("b.txt", generateRandomNumber(1, 5));

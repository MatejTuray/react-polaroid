const data = require("./doc.json");
const generateMarkdown = require("../utils/generateMarkdown");
const fs = require("fs");
const markdown = generateMarkdown("Polaroid", data);
fs.writeFile("./component.md", markdown, err => {
  if (err) {
    console.log(err);
  }
});

import fs from "node:fs";
 
fs.readFile("./src/notes.json", (err, content) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(content);
});
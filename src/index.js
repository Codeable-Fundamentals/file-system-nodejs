import fs from "node:fs";
import { console } from "node:inspector";

import http from "node:http";

const requestListener = (req, res) => {
  res.end(
    JSON.stringify({
      note: "Respuesta del servidor",
      code: 200,
    })
  );
};

const server = http.createServer(requestListener, () => {
  console.log("Se esta corriendo el servidor en puerto 8000");
});
server.listen(8000);

// EJEMPLO DE LECTURA DE UN ARCHIVO JSON
// fs.readFile("./src/notes.json","utf8", (err, content) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(content);
// });

// EJEMPLO PARA ESCRIBIR ARCHIVOS JSON
// const newNote = { id: 123, content: "Nueva nota 123" };

// fs.writeFile("./src/notes.json", JSON.stringify(newNote), (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

const path = "./src/notes.json";
const newNote = { id: 1234, content: "Nueva nota 123" };

fs.readFile(path, "utf8", (err, content) => {
  if (err) {
    console.log(err);
    return;
  }

  const notes = JSON.parse(content);
  notes.push(newNote);

  fs.writeFile(path, JSON.stringify(notes), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});

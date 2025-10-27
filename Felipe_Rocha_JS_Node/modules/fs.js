const fs = require("fs");
const path = require("path");

// Creating a folder
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }
//   console.log("Folder created successfully!");
// });

// Creating a file (Needs the folder already created). writeFile overwrite files if it has the same name and directory
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node! ",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("File created successfully!");

    // Add to a file
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Hello World! ",
      (error) => {
        if (error) {
          return console.log("Error: ", error);
        }
        console.log("File updated successfully!");
      }
    );

    // Read a file
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Error: ", error);
        }
        console.log(data);
      }
    );
  }
);

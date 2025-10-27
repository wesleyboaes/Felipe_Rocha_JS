const path = require("path");

// Just the name of the actual file
console.log(path.basename(__filename));

// Actual directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create a path file
console.log(path.parse(__filename));

// Join file paths
console.log(path.join(__dirname, "test", "test.html"));

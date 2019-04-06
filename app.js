// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Hello World"));

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));

// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}!`))  
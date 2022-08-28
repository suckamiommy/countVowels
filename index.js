// Initial core dependencies
const express = require("express");
const app = express();

// Initial router
const router = require("./src/app/routes/index");

// Initial middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./src/app/public"));

// Use router
router.apiRoutes(app);
router.webRoutes(app);

// Run server
try {
    app.listen(3000, () => { console.log(`Server started on port: 3000`) });
} catch(err) {
    throw err;
}
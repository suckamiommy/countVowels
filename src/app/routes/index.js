// Import
const countVowelsRoute = require("./api/countVowelsRoute");
const path = require("path");

// Api routes
const apiRoutes = (app) => {
    app.use('/api', countVowelsRoute);
}

// Web routes
const webRoutes = (app) => {
    app.use('/', (_, res) => res.sendFile(path.join(__dirname,'public/index.html')));
}

module.exports = { apiRoutes, webRoutes };
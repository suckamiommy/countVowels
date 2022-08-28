// Import
const express = require("express");
const router = express.Router();
const { countVowelsController } = require("../../controller/countVowelsController");

// Count vowels
router.post('/count-vowels', countVowelsController);

module.exports = router;
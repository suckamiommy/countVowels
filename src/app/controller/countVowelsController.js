// Import
const { countVowels } = require("../service/countVowels");

/**
 * 
 * @param { data } req 
 * @param { data } res 
 * @returns count vowels in words
 */
const countVowelsController = async (req, res) => {
    try {
        const { data } = req.body;
        if(!data) return res.status(200).json({ data: "INPUT_INVALID" });
        const count = countVowels(data);
        res.status(200).json({ data: count });
    } catch (error) {
        res.status(500).json({ data: "CANT_COUNT_THIS_WORDS" });
    }
}

module.exports = { countVowelsController };
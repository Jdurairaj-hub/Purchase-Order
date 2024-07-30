const express = require('express');
const router = express.Router();
const { Parts } = require('../models');  

router.get('/', async (req, res) => {
    try {
        const listOfParts = await Parts.findAll();  // Use the correct model name
        res.json(listOfParts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

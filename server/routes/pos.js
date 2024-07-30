const express = require('express');
const router = express.Router();
const { POs } = require('../models');  

router.get('/', async (req, res) => {
    try {
        const listOfPOs = await POs.findAll();  // Use the correct model name
        res.json(listOfPOs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
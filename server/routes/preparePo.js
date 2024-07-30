const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const preparedPOs = require('../tempStorage'); // Import the shared temporary storage

// Endpoint to prepare PO (excluding lines)
router.post('/prepare', [
  body('clientCompID').isInt().withMessage('Client ID must be an integer'),
  body('dateOfPO').isISO8601().withMessage('Date of PO must be a valid date'),
  body('status').isString().withMessage('Status must be a string')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { clientCompID, dateOfPO, status } = req.body;

    // Generate a temporary PO ID
    const tempPoId = Date.now();

    // Store the prepared PO in temporary storage
    preparedPOs[tempPoId] = { clientCompID, dateOfPO, status, lines: [] };

    res.json({ tempPoId });
  } catch (error) {
    console.error('Error preparing PO:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

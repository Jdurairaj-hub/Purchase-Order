const express = require('express');
const router = express.Router();
const { POs, Clients, Lines, Parts } = require('../models');  // Import the models

router.get('/:poNo', async (req, res) => {
  try {
    const poNo = req.params.poNo;
    const poData = await POs.findOne({
      where: { poNo227: poNo },
      include: [
        {
          model: Clients,
          attributes: ['clientName', 'clientCity']
        },
        {
          model: Lines,
          include: [
            {
              model: Parts,
              attributes: ['partName', 'currentPrice']
            }
          ]
        }
      ]
    });

    if (!poData) {
      console.log('PO not found');
      return res.status(404).json({ error: 'PO not found' });
    }

    console.log('PO Data:', JSON.stringify(poData, null, 2));
    res.json(poData);
  } catch (error) {
    console.error('Error fetching PO data:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

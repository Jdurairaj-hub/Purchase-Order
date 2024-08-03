const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('jdurairaj', 'jdurairaj', 'kZPAmuMxf92q4ihv8wGnrUWhc', {
  host: 'db.cs.dal.ca',
  dialect: 'mysql'
});

const POs = require('./models/pos')(sequelize, DataTypes);
const Clients = require('./models/clients')(sequelize, DataTypes);
const Parts = require('./models/parts')(sequelize, DataTypes);
const Lines = require('./models/lines')(sequelize, DataTypes);

POs.associate({ Clients, Lines });
Lines.associate({ Parts });

async function testDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const poNo = 10001; // Replace with an actual PO number
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
    } else {
      console.log('PO Data:', JSON.stringify(poData, null, 2));
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

testDatabase();
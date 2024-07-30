// File: server/models/clients.js
module.exports = (sequelize, DataTypes) => {
    const Clients = sequelize.define('Clients', {
      clientId227: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      clientName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      clientCity: {
        type: DataTypes.STRING,
        allowNull: false
      },
      moneyOwed: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    }, {
      tableName: 'Clients227',
      timestamps: false,
      freezeTableName: true
    });
  
    return Clients;
  };
  
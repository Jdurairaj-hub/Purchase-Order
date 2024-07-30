// File: server/models/lines.js
module.exports = (sequelize, DataTypes) => {
    const Lines = sequelize.define('Lines', {
      poNo227: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      lineNo227: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      partNo: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      priceOrdered: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    }, {
      tableName: 'Lines227',
      timestamps: false,
      freezeTableName: true
    });
  
    Lines.associate = function(models) {
      Lines.belongsTo(models.Parts, { foreignKey: 'partNo', targetKey: 'partNo227' });
    };
  
    return Lines;
  };
  
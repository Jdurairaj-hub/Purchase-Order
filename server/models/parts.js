module.exports = (sequelize, DataTypes) => {
    const Parts = sequelize.define('Parts', {
      partNo227: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      partName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      currentPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      qoh227: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'Parts227',
      timestamps: false,
      freezeTableName: true
    });
  
    return Parts;
  };
  
module.exports = (sequelize, DataTypes) => {
    const FindPOs = sequelize.define('FindPOs', {
      poNo227: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      clientCompID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateOfPO: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      tableName: 'POs227',
      timestamps: false,
      freezeTableName: true
    });
  
    return FindPOs;
  };
  
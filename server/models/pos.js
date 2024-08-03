module.exports = (sequelize, DataTypes) => {
  const POs = sequelize.define('POs', {
    poNo227: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true // Ensure auto-increment is set
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
    }
  }, {
    tableName: 'POs227',
    timestamps: false,
    freezeTableName: true
  });

  POs.associate = function(models) {
    POs.belongsTo(models.Clients, { foreignKey: 'clientCompID', targetKey: 'clientId227' });
    POs.hasMany(models.Lines, { foreignKey: 'poNo227', sourceKey: 'poNo227' });
  };

  return POs;
};

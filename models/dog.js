//Creating Models
module.exports = function(sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        adopted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // An Author (foreignKey) is required or a Post can't be made
                Dog.belongsTo(models.Owner, {
                    foreignKey: {
                        allowNull: true
                    }
                });
            }
        }
    });
    return Dog;
};

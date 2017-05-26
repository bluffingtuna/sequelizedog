module.exports = function(sequelize, DataTypes){
	var Owner = sequelize.define("Owner", {
		name:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [1]
			}
		}
	});
	return Owner;
};
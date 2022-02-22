module.exports = function (database, DataTypes) {
	return database.define("HighScore", {
		name: DataTypes.STRING,
		wins: DataTypes.INTEGER,
	});
};

const { Sequelize, DataTypes } = require("sequelize");
const database = new Sequelize({
    dialect: "sqlite",
    storage: "../db/xo_ultimate.sqlite",
});

//Database Models
const HighScore = require("../models/HighScore")(database,DataTypes);

async function addDemoData() {
    try {
		await database.authenticate();
        await HighScore.sync({force: true});
        await HighScore.create({
            name: "Shawn",
            wins: 1000
        });
        await HighScore.create({
            name: "Kirsten",
            wins: 869
        });
        await HighScore.create({
            name: "Heather",
            wins: 356
        });
        await HighScore.create({
            name: "Kayla",
            wins: 143
        });
        await HighScore.create({
            name: "Hester",
            wins: 486
        });
        await HighScore.create({
            name: "Johan",
            wins: 795
        });
        await HighScore.create({
            name: "Killer",
            wins: 851
        });
        await HighScore.create({
            name: "Azula",
            wins: 651
        });
        await HighScore.create({
            name: "Penny",
            wins: 674
        });
        await HighScore.create({
            name: "Olly",
            wins: 972
        });
        await HighScore.create({
            name: "Rikki",
            wins: 468
        });
        await HighScore.create({
            name: "Jenna",
            wins: 534
        });s
        await HighScore.sync();
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}
addDemoData();
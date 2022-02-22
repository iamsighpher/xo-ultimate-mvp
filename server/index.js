//Config
require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 3000;

//Express
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//Database Connection
const { Sequelize, DataTypes } = require("sequelize");
const database = new Sequelize({
	dialect: "sqlite",
	storage: "../db/xo_ultimate.sqlite",
});

//Database Models
const HighScore = require("./models/HighScore")(database,DataTypes);

//Express Routes
app.get("/", async (req, res) => {
	res.send("XO Ultimate Server");
});

app.get("/status", async (req, res) => {
	res.sendStatus(200);
});

app.get("/leaderboard", async (req, res) => {
    let highscores = await HighScore.findAll();
	res.json({
        highscores: highscores
    });
});

async function runServer() {
	try {
		await database.authenticate();
		console.log("Connection has been established successfully.");
        await HighScore.sync();

		app.listen(serverPort, () => {
			console.log(`XO Ultimate Server Listening On ${serverPort}`);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}
runServer();

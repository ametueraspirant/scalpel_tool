const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./models");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/getnews", function(req, res)
{
	axios.get("https://www.theonion.com/").then(function(response)
	{
		let $ = cheerio.load(response.data);
	
		$("article div a").each(function(i, element)
		{
			
			if($(this).text().length > 23)
			{
				let result = {};

				result.title = $(this).text();
				result.link = $(this).attr("href");

				db.Article.create(result)
				.then(function(thearticle) {
					console.log(thearticle);
				})
				.catch(function(err) {
					console.log(err);
				});
			}
		});
		res.send("Scrape Complete");
	});
});

app.get("/newses", function(req, res)
{
	db.Article.find({})
	.then(function(thearticles)
	{
		res.json(thearticles);
	})
	.catch(function(err)
	{
		res.json(err);
	});
});

app.get("/clearnews", function(req, res)
{
	db.Article.remove({})
	.then(function(article)
	{
		res.send("Articles Cleared");
	})
	.catch(function(err)
	{
		res.json(err);
	});
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
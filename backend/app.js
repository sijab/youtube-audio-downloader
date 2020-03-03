const info = require("./downloader").getVideoInfo;
const downloader = require("./downloader").downloader;
const express = require("express");
const cors = require("cors");
const zip = require("express-easy-zip");
const { formatDate, formatTime } = require("./helpers/dateAndTimeFormat");


const app = express();
const port = 4200;

let downloadEnd;


app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(zip());


app.post("/send", async (req, res) => {
  const infoVideo = await info(req.body.id);
  console.log(req.body.id);
  res.send(infoVideo);
})

app.post("/urlsend", async (req, res) => {
  downloadEnd = await downloader(req.body.url)
  console.log(downloadEnd);
  res.sendStatus(200);
})

app.get("/getfiles", (req, res) => {
  res.zip({
    files: downloadEnd,
    filename: `${formatDate()} ${formatTime()} Mp3Rub.zip`
  });
})

app.listen(port, () => console.log(`App listen on port ${port} `));
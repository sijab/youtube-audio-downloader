const info = require("./downloader").getVideoInfo;
const express = require("express");
const cors = require("cors");

const app = express();
const port = 4200;

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/send", async (req, res) => {
  let url = req.body.id;
  console.log(url);
  if(url === "" || url === undefined) return;

  const infoVideo = await info(url);
  res.send(infoVideo);
})



app.listen(port, () => console.log(`App listen on port ${port}`));
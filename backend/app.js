const info = require("./downloader").getVideoInfo;
const express = require("express");
const cors = require("cors");

const app = express();
const port = 4200;

let url = "";

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/send", async (req, res) => {
  url = req.body.id;
  console.log(url);
  if(url === "") return;

  const chuj = await info(url);
  res.send(chuj);
})



app.listen(port, () => console.log(`App listen on port ${port}`));
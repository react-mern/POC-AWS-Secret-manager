require("dotenv").config();
const express = require("express");
const { getSecret } = require("./getSecret");
const app = express();
const port = 5000;


app.listen(port, async () => {
  console.log(`Server is a running on port ${port}`);
  const secret = await getSecret()
  console.log('secret:', secret)
});

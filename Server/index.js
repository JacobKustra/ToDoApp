const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors())
app.use(express.json())

app.listen(6080, () => {
  console.log("server has started on port 6080") // 5000 in video
})
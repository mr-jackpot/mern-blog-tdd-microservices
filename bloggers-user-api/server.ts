import express from 'express';

const app = express();
const port = 3000;

app.get(`/api/user`, (req, res) => {
      res.send("Hello from user api!")
    }
  )

app.listen(port, () => {
  console.log(`Application is running on port ${port} 🚀.`);
});
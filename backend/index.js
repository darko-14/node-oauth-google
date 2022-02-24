var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}))


app.post('/auth', (req, res) => {
  const profileObj = req.body;
  const user = {
    username: profileObj.name,
    email: profileObj.email,
    image: profileObj.imageUrl
  }
  const token = jwt.sign(user, 'secret')
  res.send([user, token]);
})

app.listen(5000, () => {
  console.log('Server running on port 5000!');
})

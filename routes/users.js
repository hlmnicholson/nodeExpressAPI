import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    Age: 35,
  },
  {
    firstName: "Bill",
    lastName: "Doe",
    Age: 35,
  }
]

// all routes start with '/users'
router.get('/', (req, res) => {
  res.send(users);
  console.log(users);
});

router.post('/', (req, res) => {
  console.log('POST ROUTE REACHED');
  users.push(req.body);
  res.send("POST")
});

export default router;
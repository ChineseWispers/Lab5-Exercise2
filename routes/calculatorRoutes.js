const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
  let sum = +req.query.num1 + +req.query.num2
  console.log(sum)
  res.status(200)
  res.json({result:sum})
  })

router.get('/subtract', (req, res) => {
  let subtraction = +req.query.num1 - +req.query.num2
  console.log(subtraction)
  res.status(200)
  res.json({result:subtraction})
  })

router.get('/multiply', (req, res) => {
  let multiplication = +req.query.num1 * +req.query.num2
  console.log(multiplication)
  res.status(200)
  res.json({result:multiplication})
  })

router.get('/divide', (req, res) => {
  let division = +req.query.num1 / +req.query.num2
  console.log(division)
  res.status(200)
  res.json({result:division})
  })
  
  module.exports = router;
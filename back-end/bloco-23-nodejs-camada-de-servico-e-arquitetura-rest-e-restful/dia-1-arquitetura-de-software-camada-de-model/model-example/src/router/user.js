const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  
})

module.exports = router;

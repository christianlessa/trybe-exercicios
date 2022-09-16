const validationInput = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  try {
    if (!firstName || !lastName || !email || !password) 
    
    
  } catch (error) {
    
  }

}

const validationPassword = (req, res) => {
  const { password } = req.body;
  const stringPassword = toString(password);

  if(stringPassword.length > 6) {
    return res.json({
      error: true,
      message: 'O campo "password" deve ter pelo menos 6 caracteres',
    })
  }
}



module.exports = {
  validationInput,
}
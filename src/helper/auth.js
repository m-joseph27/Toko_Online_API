const jwt = require('jsonwebtoken');

module.exports={
  verify: (req, res, next)=>{
    const token = req.headers['x-access-token'];
    try {
      let authLogin = jwt.verify(token, process.env.SECRET_KEY);
      console.log(authLogin)
      req.id_user = authLogin.id
      next();
    } catch (err) {
      res.json({
        msg: 'token invalid'
      })
    }
  }
}
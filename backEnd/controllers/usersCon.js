const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Signup = async (req, res) => {
  console.log(req.params);

  const user_id = req.params.id;
  const user_pw = req.params.pw;

  try {
    const user = await User.findOne({ where: { user_id: user_id } });
    
    if (user != null) {
      res.json("duplicatedID");
      
    }else {
      const hash = bcrypt.hashSync(user_pw, 10);
  
      await User.create({
        user_id: user_id,
        user_pw: hash,
      });

      res.json("succeed");
    }

  } catch (error) {
    console.log(error);
  }
};


exports.Login = async (req, res) => {
  console.log(req.params);
  const user_id = req.params.id;
  const user_pw = req.params.pw;
  console.log(user_id);

  try {
    const user = await User.findOne({ where: { user_id: user_id } });
    console.log(user);

    if(user == null) {
      res.json("wrongID");
    }else {
      const same = bcrypt.compareSync(user_pw, user.user_pw);
      if(!same) {
        res.json("wrongPW")
      }else {
        let token = jwt.sign({
          user_id
        }, process.env.ACCESS_TOKEN_KEY,
        {
          expiresIn : "60m"
        });
console.log(req.sessionID)
        req.session.access_token = token;
        // res.cookie('access_token', token, {
        //   httpOnly: true,
        //   secure: false, // HTTPS를 사용하는 경우에만 설정
        //   maxAge: 60 * 60 * 1000 // 쿠키의 만료 시간 설정 (여기서는 60분)
        // });

        res.json(user_id);
      }
    }

  } catch (error) {
    console.log(error);
  }
}
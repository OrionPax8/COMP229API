// create a User Model Instance
const userModel = require('../models/user');
const User = userModel.User;


const LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = user.generateAuthToken();

    res.status(200).json({ message: 'Login successful', status: 1, token: token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const LogoutUser = async (req, res) => {
        req.logout((err) =>{
            if(err){
                // handle error here
                console.log(err);
                res.status(500).json({message: 'Server Error'});
            }
      
            res.status(200).json({message: 'Logout successful'});
        });
      } 


module.exports = { LoginUser, LogoutUser };
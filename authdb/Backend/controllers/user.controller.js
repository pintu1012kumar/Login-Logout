import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
  try {
      const { fullname, email, password } = req.body;
      
      // Check if user already exists
      const user = await User.findOne({ email });
      if (user) {
          return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashPassword = await bcryptjs.hash(password, 10);

      // Create the user
      const createUser = new User({
          fullname: fullname,
          email: email,
          password: hashPassword,
      });

      await createUser.save();
      res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
      console.log('Error:', error.message);
      res.status(500).json({ message: 'Internal server error' });
  }
};


  export const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password,user.password);

       
       
        if(!user || !isMatch){
            return res.status(400).json({ message: "Invalid username or password" });
        }else {

          const jwtToken = jwt.sign(
            {email:user.email, _id:user._id},
            process.env.JWT_TOKEN,
            { expiresIn: '24h' }
          )

            res.status(200).json({ message: "Login successfully", user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            password:password,
            jwtToken:jwtToken
            }});
        }
    } catch (error) {
        console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
    }
}
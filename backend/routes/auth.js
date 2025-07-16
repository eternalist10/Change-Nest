const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require("../models/UserData.js");
const jwt = require("jsonwebtoken")
const fetchUser = require("../middleware/fetchUser.js")

const JWT_SECRET = 'Shubhraisagoodboy';

router.post(
  "/createuser", [body("name").isLength({ min: 3 }), body("email").isEmail(), body("password").isLength({ min: 5 }),
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    res.json({ authtoken })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
);

//Route 2- Find user using: POST "/api/auth/login".
router.post(
  "/login",

  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    //If not valid, errors are returned
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() })
    }
    //If valid, do this
    const { email, password } = req.body;
    try {
      //Find user data from db first to determine whether the user exists
      let user = await User.findOne({ email });
      //If user doesn't exist due to incorrect credentials return error
      if (!user) {
        return res.status(400).json({ success, error: "Please try to login with correct credentials" })
      }
      //else do this
      //Comparing request and existing user passwords using their hash
      const passwordCompare = await bcrypt.compare(password, user.password)
      //If passwords don't match, do this
      if (!passwordCompare) {
        return res.status(400).json({ success, error: "Please try to login with correct credentials" })
      }
      //else do this
      //Provide JWT token after signing it with payload
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET)
      //Return user token
      success = true
      res.json({ success, authtoken })
      //If server error, return this
    } catch (err) {
      console.error(err);
      res.status(500).json({ success, error: "Internal Server Error" })
    }
  }
)

//Route 3: Get logged in user details using: POST "/api/auth/getuser". Login required

router.post("/getuser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
)

module.exports = router;

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/UserModel.js";

export const singIn = (req, res) => {
  const user = req.body;

  User.findOne({ email: user.email }).then((userDB) => {
    console.log(`hello ${userDB}`);
    console.log(user.email);
    if (!userDB) {
      console.log("entered here");
      return res.status(404).json({ message: "invalid user" });
    } else {
      console.log("entered");
      // console.log(typeof window);
      bcrypt.compare(user.password, userDB.password).then((isValid) => {
        if (isValid) {
          const payload = {
            id: userDB._id,
            name: userDB.name,
            email: userDB.email,
          };
          jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
            if (err) {
              return res.status(404).json({ message: err });
            }
            res.cookie("jwtToken", token, {
              httpOnly: true,
              secure: true,
            });
            return res.status(200).json({
              message: "success",
              token: "Bearer " + token,
            });
          });
        } else {
          return res.status(404).json({ message: "invalid password" });
        }
      });
    }
  });
};

export const singUp = async (req, res) => {
  const user = req.body;

  const enteredEmail = await User.findOne({ email: user.email });

  if (enteredEmail) {
    const data = { message: "User exists!" };
    res.status(409).json(data);
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);
    const userDB = new User({
      name: user.name,
      email: user.email.toLowerCase(),
      password: user.password,
    });

    userDB.save();
    res.json({ message: "Registered successfully! Welcome aboard wanderer" });
  }
};

const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')

const registerController = async (req, res) => {
  const { name, email, password, contact, city, sport } = req.body;

  //  validation
  if (!name || !email || !password || !contact || !city || !sport) {
    return res.send({
      message: "All fields must be filled",
    });
  }
  if (!validator.isEmail(email)) {
    return res.send({
      message: "Email is not valid",
    });
  }

  const minLength = 6;
  const hasUpperCase = true;
  const hasLowerCase = true;
  const hasNumber = true;
  const hasSpecialCharacter = true;

  //password validation
  const isValidPassword = validator.isStrongPassword(password, {
    minLength,
    hasUpperCase,
    hasLowerCase,
    hasNumbers: hasNumber,
    hasSymbols: hasSpecialCharacter,
  });

  if (!isValidPassword) {
    return res.send({
      message:
        "Password is not strong include uppercase, lowercase and characters",
    });
  }

  const oldUser = await userModel.findOne({ email });

  if (oldUser) {
    return res.send({ data: "User already exists!!" });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    await userModel.create({
      name: name,
      email: email,
      contact,
      password: encryptedPassword,
      city,
      sport,
    });
    res.send({ status: "ok", data: "User Created" });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
 
};

//POST LOGIN
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(404).send({
            success: false,
            message: "Invalid email or password",
          });
        }

        const oldUser = await userModel.findOne({ email: email });

        if (!oldUser) {
          return res.send({ data: "User does not exist!!" });
        }

        if(await bcrypt.compare(password, oldUser.password)){
            const token = jwt.sign({ email: oldUser.email},  process.env.JWT_SECRET)

            if(res.status(201)){
                return res.send({ status: 'ok', data: token})
            }else {
                return res.send({ error: 'error'})
            }
        }
    } catch (error) {
        res.send({ status: "error", data: error });
    }
    
};


const getSingleUser = async (req, res) => {
  
try {
    const {token} = req.body

    const user = jwt.verify(token, process.env.JWT_SECRET)
    const useremail = user.email

    userModel.findOne({email: useremail}).then((data) => {
        return res.send({ status: 'ok', data: data})
    })
} catch (error) {
    res.send({ status: "error", data: error });
}
}

const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting Orders",
      error,
    });
  }
};

const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting Users Orders",
      error,
    });
  }
};

const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating User Orders",
      error,
    });
  }
};
module.exports = {
  registerController,
  loginController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
  getSingleUser,
};

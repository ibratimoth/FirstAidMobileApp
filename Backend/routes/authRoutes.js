const express = require('express')
const {registerController, 
    loginController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,
    getSingleUser
} = require('../controllers/authController')
const {isAdmin, requireSignIn } = require('../middlewares/authMiddleware')

const router = express.Router()

//POST REGISTER
router.post('/register', registerController)

//POST LOGIN
router.post('/login',loginController)

//forgot Password || POST
router.post('/getsingleuser', getSingleUser)


//protected user route auth
router.get('/user-auth',requireSignIn, (req,res) => {
    res.status(200).send({ ok: true});
})

//protected admin route auth
router.get('/admin-auth',requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ ok: true});
})

//orders
router.get('/orders', requireSignIn, getOrdersController)

//all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

//order status update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)


module.exports = router
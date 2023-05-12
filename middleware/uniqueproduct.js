const { CartModel } = require("../models/cart.model");


const uniquecart = async (req, res, next) => {
    let { productId, userID } = req.body;
    if (req.url == "/add") {
        let user = await CartModel.findOne({ productId , userID});
        if (user) {
            res.status(200).send({ "msg": "this product already exist" })
        }
        else {
            next();
        }
    }
    else {
        next();
    }
}

module.exports = { uniquecart }
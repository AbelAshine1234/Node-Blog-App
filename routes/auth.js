// Authentication
const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const e = require('express')
// REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = await User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            profilepic: req.body.profilepic
        })

        const savedResult = await user.save();
        res.status(202).json(savedResult);
    } catch (error) {
        console.log(`${error}`);
    }



})

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            console.log(user);
            const valid = await bcrypt.compare(req.body.password, user.password);
            console.log(valid);
            if (valid) {
                const { password, ...others } = user._doc;
                res.status(200).json(others);
            }
        }
        else {
            res.status(404).json("Wrong Credentials")
        }

    } catch (error) {
        console.log(`${error}`);
    }
})
module.exports = router

const express = require("express");
require("./db/config");
const User = require("./db/users")
const Product = require("./db/products")
const cors = require("cors")

const Jwt = require("jsonwebtoken");
const jwtKey = "realestate";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "no user found token code err" })
        } else {

            resp.send({ result, auth: token });
        }
    })
})

app.post("/login", async (req, resp) => {
    let user = await User.findOne(req.body).select("-password");

    if (req.body.email && req.body.password) {
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "no user found token code err" })
                } else {

                    resp.send({ user, auth: token });
                }

            })
        } else {
            resp.send({ result: "no match login result found" })
        }
    } else {
        resp.send({ result: "fill both fields email & password" })
    }
})

app.post("/addproduct",verifyToken, async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
})

app.get("/products",verifyToken, async (req, resp) => {
    let products = await Product.find();

    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "no products found" })
    }
})

app.delete("/product/:id",verifyToken, async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    resp.send(result)
})


app.get("/product/:id",verifyToken, async (req, resp) => {
    const result = await Product.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    } else {
        resp.send({ result: "no record found to get" })
    }
})

app.put("/product/:id",verifyToken, async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result);
})

app.get("/search/:key", verifyToken, async (req, resp) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { manager: { $regex: req.params.key } },
        ]
    })
    resp.send(result);

})

function verifyToken(req, resp, next) {
    let token = req.headers["authorization"];
    if (token) {
        token = token.split(" ")[1];
        Jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                resp.status(401).send({ result: "pro valid tok" })
            } else {
                next();
                console.log("middleware called", token);
            }
        })
    } else {
        resp.send({ result: "please add token to header" });
    }
}

app.listen(8000);
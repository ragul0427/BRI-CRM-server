const express = require('express')
const router=express.Router()
const {createForm,getForm, updateForm} = require("../controllers/formController");

router.post("/createform",createForm).get("/getform",getForm).put("/updateform/:id",updateForm)
module.exports=router
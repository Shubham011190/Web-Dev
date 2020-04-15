const express = require("express");
const employeeRouter = express.Router();
const Employee = require("../model/Employee");

//CRUD Operations


//Read

employeeRouter.get('/', (req, res) => {
    Employee.find({}, (err, response) => {
        if (err) {
            res.status(500).json({
                message: {
                    msgBody: "Unable to get Employess",
                    msgError: true
                }
            });
        }
        else {
            res.status(200).json({ response })
        }
    });
})
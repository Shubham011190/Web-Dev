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
                    msgBody: "Unable to get Employees",
                    msgError: true
                }
            });
        }
        else {
            res.status(200).json({ response })
        }
    });
})

//Create

employeeRouter.post('/', (req, res) => {
    const employee = new Employee(req.body);
    employee.save((err, documents) => {
       if (err) {
            res.status(500).json({
                message: {
                    msgBody: "Unable to save Employee data",
                    msgError: true
                }
            });
        }
        else {
           res.status(200).json({
               message: {
                   msgBody: "Successfully saved data.",
                   msgError: false
               }
           });
        }
    });
});

//Delete

employeeRouter.delete('/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.status(500).json({
                message: {
                    msgBody: "Unable to delete employee",
                    msgError: true
                }
            });
        }
        else {
            res.status(200).json({
                message: {
                    msgBody: "Employee deleted successfully",
                    msgError: false
                }
            });
        }
    })
})
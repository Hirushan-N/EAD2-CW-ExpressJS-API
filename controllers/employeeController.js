import {v4 as uuidv4} from "uuid";
import {ConnectDB,db} from "../DB/DBConnection.js";

ConnectDB();
const collection = db.collection('Employee');


export const getEmployees = async (req,res) => {

    const Employees = await collection.find({}).toArray();
    res.send(Employees);
}

export const createEmployee = async (req,res) => {
    //console.log('POST ROUTE REACHED');
    const Employee = {id: uuidv4() , ...req.body }
    const insertResult = await collection.insertOne(Employee);
    console.log(Employee);
    res.send(insertResult); 
}

export const getEmployee = async (req,res) => {
    //console.log('GET BY ID ROUTE REACHED');
    const {id} = req.params;
    const foundEmployee = await collection.findOne({ id: id });
    res.send(foundEmployee);
}

export const deleteEmployee = async (req,res) => {
    //console.log('DELETE BY ID ROUTE REACHED');
    const {id} = req.params;
    const deleteResult = await collection.deleteOne({ id: id });
    res.send(deleteResult);
}

export const updateEmployee =  async (req,res) => {
    //console.log('UPDATE BY ID ROUTE REACHED');
    const {id} = req.params;
    const {name , nic, birthday, address, mobile, telephone} = req.body;

    const Employee = await collection.findOne({ id: id });

    if(name){
        Employee.name = name;
    }

    if(nic){
        Employee.nic = nic;
    }

    if(birthday){
        Employee.birthday = birthday;
    }

    if(address){
        Employee.address = address;
    }

    if(mobile){
        Employee.mobile = mobile;
    }

    if(telephone){
        Employee.telephone = telephone;
    }


    const updateResult = await collection.updateOne(
        { id: id }, 
        { $set: { 
            name: Employee.name,
            nic: Employee.nic ,
            birthday:Employee.birthday,
            address:Employee.address,
            mobile:Employee.mobile,
            telephone:Employee.telephone 
        } }
        );
    res.send(updateResult);
}
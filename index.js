import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/employeeRoutes.js"

const app = express({
    origin:"http://localhost:3000"
});
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server is runing on port http://localhost:${PORT}`));

app.use('/api/employees',userRoutes)

//GET
app.get('/',(req,res) => {
    console.log('Test!');

    res.send('hello from homepage')
});

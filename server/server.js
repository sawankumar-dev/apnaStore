import mongoose from "mongoose";
import app from "./src/app.js";

mongoose.connect("mongodb://localhost:27017/NotePro")
.then(() => {
    console.log("Db is connected");
    app.listen(3000, () => {
        console.log("Server is running...")
    })
});
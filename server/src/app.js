import express from "express"
import noteRouter from "./routes/note.routes.js";
import { fileURLToPath } from 'url';
import path from 'path';

import cors from 'cors';
import config from "./config/config.js";
import userRouter from "./routes/user.routes.js";

const app = express();
// 1. ES Module mein __dirname ko aise banate hain:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors({
    origin: " http://localhost:5173", 
    credentials: true,
}))

//  Sahi aur Standard Tarika
app.use("/api/v1/auth", userRouter); 


if(config.NODE_ENV === 'production') {
    const buildPath = path.join(__dirname, '../../client/dist');

    app.use(express.static(buildPath))
    app.get("*any", (req, res) =>{
        res.sendFile(path.join(buildPath, 'index.html'))
    })
} else {
    app.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            message: "Server is healthy"
        })
    })
}

export default app;
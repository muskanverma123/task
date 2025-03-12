import express from "express"
const app  = express()
import connectDb from "./src/config/ConfigDb.js"
import userRouter from "./src/routes/UserRoute.js"
import taskRouter from "./src/routes/TaskRoute.js"
import projectRouter from "./src/routes/ProjectRoute.js"
import adminRouter from "./src/routes/AdminRoute.js"
import dotenv, { config } from "dotenv"

dotenv.config()
app.use(express.json())
const port = process.env.PORT

connectDb()

app.use("/user",userRouter)
app.use("/task",taskRouter)
app.use("/admin",adminRouter)
app.use("/project",projectRouter)

app.get('/',(req,res)=>{
  res.send("hello from server testing")
})

app.listen(port,()=>{
  console.log("app listen on 9000")
})
// let server = app.listen(port,()=>{
//     connectDb()
//     console.log("server is running on port 9000")
// })

export default app;
import express from "express"
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("test")
})

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running on port: ${PORT}`))

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRoute from './routes/product.route.js'

dotenv.config()
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/api/products", productRoute)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected!'));
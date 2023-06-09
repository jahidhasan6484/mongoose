import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express()

// Application routes
import userRoutes from './app/modules/user/user.route'


// Using cors
app.use(cors())

// Parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/user', userRoutes)

export default app;
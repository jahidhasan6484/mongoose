import express, { Application, Request, Response } from 'express';
import cors from 'cors';


const app: Application = express()
// Using cors
app.use(cors())

// Parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    // Insert data into mongodb
    res.send('Hello BRO!')
})

export default app;
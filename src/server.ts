import mongoose from 'mongoose';
import app from './app';

const port:number = 5000;

// Databse connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose');
        console.log("Database connection successful")

        app.listen(port, () => {
            console.log(`Mongoose listening on port ${port}`)
        })
    } catch {
        console.log("Failed to connect with database")
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()




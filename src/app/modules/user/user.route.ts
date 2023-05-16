import express from 'express';
import { createUser, getUser, getUsers } from './user.controller';

const router = express.Router()


router.post("/create-user", createUser)
router.get("/:id", getUser)
router.get("/users", getUsers)

export default router;
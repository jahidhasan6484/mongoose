import express from 'express';
import { createUser, getFootballers, getUser, getUsers } from './user.controller';

const router = express.Router()


router.post("/create-user", createUser)

router.get("/users", getUsers)
router.get("/footballers", getFootballers)

router.get("/:id", getUser)

export default router;
import express from "express"
import { findSourceMap } from "module"
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

/* Read */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* Update */
router.patch("/:id/:friendID", verifyToken, addRemoveFriend);

export default router;
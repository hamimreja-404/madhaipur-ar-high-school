import { Router } from "express";
import multer from "multer";

import { loginUser, registerUser } from "../controller/user.controller.js";
import { noticeUpload } from "../controller/notice.controller.js";

const router = Router();

// configure multer


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// add multer middleware for file handling
const upload = multer({ dest: "temp/" }); // local temp storage

router.post("/dashboard", upload.single("noticeUpload"), noticeUpload);
export default router;

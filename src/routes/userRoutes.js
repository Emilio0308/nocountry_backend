import express from "express";
import { singUp, login } from "../controllers/userController.js";
import {
  validSingUp,
  validLogin,
  validTransferOptional,
  validTransferRequire,
} from "../middlewares/valid.middleware.js";
import { CreateTransfer, GetTransfers } from "../controllers/transfer.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", validSingUp, singUp);

router.post("/login", validLogin, login);

router.use(protect);
// //accounnumber cbu || cvu || alias del destinatario amount por req
router.get("/:userid/:currency/", GetTransfers)
router.post(
  "/:userId/:currency/",
  validTransferOptional,
  validTransferRequire,
  CreateTransfer
);

export default router;
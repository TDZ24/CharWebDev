const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsAppController");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMessage)

module.exports = router;
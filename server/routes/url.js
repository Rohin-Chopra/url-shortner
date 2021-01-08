const { Router } = require("express");
const urlController = require("./../controllers/url");

const router = new Router();

router.post("/", urlController.createShortUrl);
router.get("/:id", urlController.redirectToLongUrl);

module.exports = router;

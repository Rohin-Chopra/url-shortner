const { Router } = require("express");
const urlController = require("./../controllers/url");

const router = new Router();

router.post("/", urlController.createShortUrl);
router.get("/:id", urlController.redirectToLongUrl);
router.get("/:id/info", urlController.getUrl);

module.exports = router;

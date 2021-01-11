const { Router } = require("express");
const viewController = require("./../controllers/view");

const router = new Router();

router.route("/").get();

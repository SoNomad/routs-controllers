const { Router } = require("express");
const { brandsController } = require("../controllers/brands.controller");

const router = Router();

router.get("./brands.route");
router.post("./brands.route");
router.delete("./brands.route");

module.exports = router;
